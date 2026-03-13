
// Import des hooks React nécessaires
import React, { useState, useEffect } from "react";

// Link : navigation sans rechargement
// useNavigate : redirection après succès
import { Link, useNavigate } from "react-router-dom";

// Icônes pour l’UI
import {
  Eye,
  EyeOff,
  Mail,
  User,
  Lock,
  CheckCircle,
  XCircle,
} from "lucide-react";

// Axios : requêtes HTTP vers l’API
import axios from "axios";

// Durée du blocage après trop de tentatives (15 minutes)
const BLOCK_DURATION = 15 * 60; // en secondes

// Clé utilisée pour stocker le blocage dans le navigateur
const STORAGE_KEY = "register_block_until";

const HeroSection = () => {
  const navigate = useNavigate(); // redirection programmée

  // ===== États UI =====
  const [showPassword, setShowPassword] = useState(false); // afficher / cacher le mot de passe
  const [errorMsg, setErrorMsg] = useState(""); // message d’erreur
  const [loading, setLoading] = useState(false); // état de chargement
  const [passwordTouched, setPasswordTouched] = useState(false); // affichage des règles

  // ===== Sécurité : blocage après trop de tentatives =====
  const [isBlocked, setIsBlocked] = useState(false); // formulaire bloqué ou non
  const [remainingTime, setRemainingTime] = useState(0); // temps restant en secondes

  // ===== Données du formulaire =====
  const [formData, setFormData] = useState({
    nom: "",
    postnom: "",
    prenom: "",
    email: "",
    password: "",
  });

  // Regex : autorise uniquement lettres + espaces + tirets (min 2 caractères)
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;

  // ===== Règles de validation du mot de passe =====
  const passwordRules = {
    length: formData.password.length >= 8,       // minimum 8 caractères
    uppercase: /[A-Z]/.test(formData.password), // une majuscule
    lowercase: /[a-z]/.test(formData.password), // une minuscule
    number: /\d/.test(formData.password),        // un chiffre
    special: /[\W_]/.test(formData.password),   // un caractère spécial
  };

  // Vérifie si toutes les règles sont respectées
  const isPasswordValid = Object.values(passwordRules).every(Boolean);

  // ===== Gestion des changements dans le formulaire =====
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    // Dès que l’utilisateur touche au mot de passe,
    // on affiche les règles de sécurité
    if (field === "password") setPasswordTouched(true);
  };

  // ===== AU CHARGEMENT DE LA PAGE =====
  // Vérifie si un blocage existe déjà (même sur un autre téléphone)
  useEffect(() => {
    const blockedUntil = localStorage.getItem(STORAGE_KEY);

    if (blockedUntil) {
      const diff = Math.floor((blockedUntil - Date.now()) / 1000);

      if (diff > 0) {
        // Blocage toujours actif
        setIsBlocked(true);
        setRemainingTime(diff);
      } else {
        // Blocage expiré
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // ===== TIMER : décrémente chaque seconde =====
  useEffect(() => {
    if (!isBlocked || remainingTime <= 0) return;

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          // Temps écoulé → déblocage automatique
          clearInterval(interval);
          setIsBlocked(false);
          localStorage.removeItem(STORAGE_KEY);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Nettoyage du timer
    return () => clearInterval(interval);
  }, [isBlocked, remainingTime]);

  // ===== Formatage du temps restant (mm:ss) =====
  const formatRemainingTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // ===== Soumission du formulaire =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Empêche toute action si le compte est bloqué
    if (isBlocked) return;

    // Validation des noms
    if (
      !nameRegex.test(formData.nom) ||
      !nameRegex.test(formData.postnom) ||
      !nameRegex.test(formData.prenom)
    ) {
      return setErrorMsg(
        "Nom, postnom et prénom doivent contenir uniquement des lettres (min. 2)."
      );
    }

    // Validation du mot de passe
    if (!isPasswordValid) {
      return setErrorMsg("Mot de passe non conforme aux règles.");
    }

    setLoading(true);

    try {
      // Envoi des données vers l’API
      const response = await axios.post(
        "https://hotellerie.onrender.com/api/auth/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      // Succès
      alert(response.data.message);
      localStorage.setItem("pendingEmail", formData.email);
      navigate("/Attente");

    } catch (error) {
      // Trop de tentatives → blocage 15 minutes
      if (error.response?.status === 429) {
        const blockUntil = Date.now() + BLOCK_DURATION * 1000;
        localStorage.setItem(STORAGE_KEY, blockUntil);

        setIsBlocked(true);
        setRemainingTime(BLOCK_DURATION);
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Erreur serveur. Veuillez réessayer plus tard.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  // Composant pour afficher une règle (icône verte ou rouge)
  const Rule = ({ ok, text }) => (
    <div className="flex items-center gap-2 text-sm">
      {ok ? (
        <CheckCircle size={16} className="text-green-500" />
      ) : (
        <XCircle size={16} className="text-red-400" />
      )}
      <span className={ok ? "text-green-600" : "text-gray-500"}>
        {text}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 py-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-gray-200">

        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Créez votre compte
        </h2>

        <p className="text-sm text-gray-500 text-center mb-4">
          Commencez votre expérience Luxe Haven dès aujourd’hui
        </p>

        {errorMsg && (
          <p className="text-red-500 text-sm text-center mb-4">
            {errorMsg}
          </p>
        )}

        {/* ===== AJOUT : message blocage ===== */}
        {isBlocked && (
          <p className="text-red-600 text-sm text-center mb-4">
            Trop de tentatives. Réessayez dans {formatRemainingTime()}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                value={formData.nom}
                onChange={(e) => handleChange("nom", e.target.value)}
                required
                placeholder="Entrez votre nom"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Post-nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Post-nom</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                value={formData.postnom}
                onChange={(e) => handleChange("postnom", e.target.value)}
                required
                placeholder="Entrez votre post-nom"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Prenom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prenom</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                value={formData.prenom}
                onChange={(e) => handleChange("prenom", e.target.value)}
                required
                placeholder="Entrez votre prenom"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                placeholder="exemple@email.com"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                onFocus={() => setPasswordTouched(true)} // 👉 affichage des règles au clic
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg"
              />
              <div
                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            {/* Règles du mot de passe (affichées uniquement après interaction) */}
            {passwordTouched && (
              <div className="mt-2 space-y-1">
                <Rule ok={passwordRules.length} text="8 caractères minimum" />
                <Rule ok={passwordRules.uppercase} text="Une majuscule" />
                <Rule ok={passwordRules.lowercase} text="Une minuscule" />
                <Rule ok={passwordRules.number} text="Un chiffre" />
                <Rule ok={passwordRules.special} text="Un caractère spécial" />
              </div>
            )}
          </div>

          {/* Bouton d'inscription */}
          <button
            type="submit"
            disabled={loading || isBlocked}
            className={`w-full bg-secondary text-white py-2 rounded-lg ${
              loading || isBlocked ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Inscription en cours..." : "S’inscrire"}
          </button>
        </form>

        {/* Liens */}
        <div className="mt-6 text-center">
          <Link to="/connexion" className="text-sm text-secondary hover:underline">
            Déjà un compte ? Connectez-vous
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;