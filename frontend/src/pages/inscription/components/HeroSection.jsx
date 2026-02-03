import React, { useState, useEffect } from "react";

// Link : navigation sans recharger la page
// useNavigate : redirection programmée après inscription
import { Link, useNavigate } from "react-router-dom";

// Icônes utilisées dans le formulaire
import {
  Eye,
  EyeOff,
  Mail,
  User,
  Lock,
  CheckCircle,
  XCircle,
} from "lucide-react";

// axios : permet d'envoyer des requêtes HTTP (POST, GET, etc.)
import axios from "axios";

// Stocke les données saisies dans le formulaire
const HeroSection = () => {
  const navigate = useNavigate(); // pour redirection
  const [showPassword, setShowPassword] = useState(false); // pour afficher la valeur du password
  const [errorMsg, setErrorMsg] = useState(""); // message d'erreur
  const [loading, setLoading] = useState(false); // Indique si la requête est en cours (chargement)

  // État pour savoir si l'utilisateur a commencé à saisir le mot de passe
  const [passwordTouched, setPasswordTouched] = useState(false);

  // ===== AJOUT : blocage après trop de tentatives =====
  const [isBlocked, setIsBlocked] = useState(false);
  const [retryAfter, setRetryAfter] = useState(null);
  

  const [formData, setFormData] = useState({
    nom: "",
    postnom: "",
    prenom: "",
    email: "",
    password: "",
  });

  // Regex pour autoriser uniquement les lettres
  // Minimum 2 caractères
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;

  // Objet qui contient les règles de validation du mot de passe
  const passwordRules = {
    // Vérifie si le mot de passe a au moins 8 caractères
    length: formData.password.length >= 8,

    // Vérifie la présence d’une majuscule
    uppercase: /[A-Z]/.test(formData.password),

    // Vérifie la présence d’une minuscule
    lowercase: /[a-z]/.test(formData.password),

    // Vérifie la présence d’un chiffre
    number: /\d/.test(formData.password),

    // Vérifie la présence d’un caractère spécial
    special: /[\W_]/.test(formData.password),
  };

  // Vérifie si TOUTES les règles du mot de passe sont respectées
  const isPasswordValid = Object.values(passwordRules).every(Boolean);

  // Fonction appelée à chaque changement dans un champ
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    // 👉 Dès que l'utilisateur commence à saisir le mot de passe,
    // on affiche les règles
    if (field === "password") {
      setPasswordTouched(true);
    }
  };

  // ===== AJOUT : compte à rebours 15 minutes =====
  useEffect(() => {
    if (!retryAfter) return;

    const interval = setInterval(() => {
      if (Date.now() >= retryAfter) {
        setIsBlocked(false);
        setRetryAfter(null);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [retryAfter]);

  // ===== AJOUT : format temps restant =====
  const formatRemainingTime = () => {
    if (!retryAfter) return "";
    const diff = retryAfter - Date.now();
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setErrorMsg(""); // Réinitialise le message d’erreur

    // ===== AJOUT : empêche soumission si bloqué =====
    if (isBlocked) {
      return;
    }

    // Vérifie nom, postnom et prénom
    if (
      !nameRegex.test(formData.nom) ||
      !nameRegex.test(formData.postnom) ||
      !nameRegex.test(formData.prenom)
    ) {
      return setErrorMsg(
        "Nom, postnom et prénom doivent contenir uniquement des lettres (min. 2)."
      );
    }

    // Vérifie si le mot de passe respecte toutes les règles
    if (!isPasswordValid) {
      return setErrorMsg("Mot de passe non conforme aux règles.");
    }

    setLoading(true); // Active l'état de chargement

    try {
      const response = await axios.post(
        "https://hotellerie.onrender.com/api/auth/register",
        formData,
        {
          timeout: 15000,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert(response.data.message); // succès
      localStorage.setItem("pendingEmail", formData.email);
      navigate("/Attente"); // redirection
    } catch (error) {
      // ===== AJOUT : gestion du 429 (trop de tentatives) =====
      if (error.response && error.response.status === 429) {
        setIsBlocked(true);
        setRetryAfter(Date.now() + 15 * 60 * 1000); // 15 minutes
        setErrorMsg(error.response.data.message);
      } else if (error.response && error.response.data) {
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