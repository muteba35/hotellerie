// Importation de React et du hook useState pour gérer l’état du composant
import React, { useState } from "react";

// Link : navigation sans rechargement
// useNavigate : redirection programmatique (après inscription)
import { Link, useNavigate } from "react-router-dom";

// Importation des icônes utilisées dans le formulaire
import { Eye, EyeOff, Mail, User, Lock, CheckCircle, XCircle } from "lucide-react";

// Axios permet d’envoyer des requêtes HTTP (POST vers le backend)
import axios from "axios";

// Déclaration du composant HeroSection
const HeroSection = () => {

  // Hook pour rediriger l’utilisateur vers une autre page
  const navigate = useNavigate();

  // État pour afficher ou masquer le mot de passe
  const [showPassword, setShowPassword] = useState(false);

  // État pour indiquer si une requête est en cours
  const [loading, setLoading] = useState(false);

  // État pour stocker les messages d’erreur
  const [errorMsg, setErrorMsg] = useState("");

  // État pour savoir si l'utilisateur a commencé à saisir le mot de passe
  const [passwordTouched, setPasswordTouched] = useState(false);

  // État qui contient toutes les données du formulaire
  const [formData, setFormData] = useState({
    nom: "",        // nom de l’utilisateur
    postnom: "",    // postnom
    prenom: "",     // prénom
    email: "",      // email
    password: "",   // mot de passe
  });

  /* ================= VALIDATIONS ================= */

  // Regex pour autoriser uniquement les lettres (pas de chiffres, pas de @@@)
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
    // Met à jour uniquement le champ modifié
    setFormData({ ...formData, [field]: value });
  };

  /* ================= SUBMIT ================= */

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = async (e) => {

    // Empêche le rechargement de la page
    e.preventDefault();

    // Réinitialise le message d’erreur
    setErrorMsg("");

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

    // Active l’état de chargement
    setLoading(true);

    try {
      // Envoi des données au backend (API register)
      const res = await axios.post(
        "https://hotellerie.onrender.com/api/auth/register",
        formData,
        { timeout: 15000 }
      );

      // Affiche le message de succès du serveur
      alert(res.data.message);

      // Sauvegarde l’email pour l’étape de vérification
      localStorage.setItem("pendingEmail", formData.email);

      // Redirection vers la page d’attente
      navigate("/Attente");

    } catch (err) {
      // Affiche le message d’erreur venant du backend ou un message générique
      setErrorMsg(
        err.response?.data?.message || "Erreur serveur. Réessayez plus tard."
      );
    } finally {
      // Désactive l’état de chargement dans tous les cas
      setLoading(false);
    }
  };

  // Composant pour afficher une règle (icône verte ou rouge)
  const Rule = ({ ok, text }) => (
    <div className="flex items-center gap-2 text-sm">
      {ok ? (
        // Icône verte si la règle est respectée
        <CheckCircle size={16} className="text-green-500" />
      ) : (
        // Icône rouge si la règle n’est pas respectée
        <XCircle size={16} className="text-red-400" />
      )}
      <span className={ok ? "text-green-600" : "text-gray-500"}>
        {text}
      </span>
    </div>
  );

  // Rendu JSX du composant
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Créez votre compte
        </h2>
        <p className="text-sm text-gray-500 text-center mb-4">
          Commencez votre expérience Luxe Haven dès aujourd’hui
        </p>

        {/* Message d’erreur */}
        {errorMsg && (
          <p className="text-red-500 text-sm text-center mb-4">
            {errorMsg}
          </p>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Champs nom, postnom, prénom */}
          {["nom", "postnom", "prenom"].map((field) => (
            <div key={field}>
              <label className="text-sm font-medium capitalize">
                {field}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="w-full pl-10 py-2 border rounded-lg focus:ring-2"
                  required
                  placeholder={
                    field === "nom"
                      ? "Ex : Muteba"
                      : field === "postnom"
                      ? "Ex : Junior"
                      : "Ex : Jean"
                  }
                />
              </div>
            </div>
          ))}

          {/* Champ email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full pl-10 py-2 border rounded-lg"
                required
                placeholder="exemple@email.com"
              />
            </div>
          </div>

          {/* Champ mot de passe */}
          <div>
            <label className="text-sm font-medium">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onFocus={() => setPasswordTouched(true)}
                onChange={(e) => {
                  setPasswordTouched(true);
                  handleChange("password", e.target.value);
                }}
                className="w-full pl-10 pr-10 py-2 border rounded-lg"
                required
              />

              {/* Icône afficher / masquer mot de passe */}
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            {/* Règles du mot de passe (affichées uniquement après saisie) */}
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

          {/* Bouton submit */}
          <button
            disabled={loading}
            className="w-full bg-secondary text-white py-2 rounded-lg mt-4 disabled:opacity-50"
          >
            {loading ? "Inscription..." : "S’inscrire"}
          </button>
        </form>

        {/* Lien vers la connexion */}
        <div className="text-center mt-5">
          <Link to="/connexion" className="text-secondary text-sm">
            Déjà un compte ? Connexion
          </Link>
        </div>
      </div>
    </div>
  );
};

// Export du composant pour l’utiliser ailleurs
export default HeroSection;