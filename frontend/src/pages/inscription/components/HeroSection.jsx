import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";
import axios from "axios";

const HeroSection = () => {
  const navigate = useNavigate(); // pour redirection
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    postnom: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(""); // message d'erreur
  const [loading, setLoading] = useState(false); // état chargement

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(""); // reset message
    setLoading(true);

    try {
      const response = await axios.post("https://hotellerie.onrender.com/api/auth/register", 
        formData,{
        timeout: 15000, 
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(response.data.message); // succès
      setLoading(false);
      navigate("/connexion"); // redirection vers la page de connexion
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Erreur serveur. Veuillez réessayer plus tard.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 py-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Créez votre compte
        </h2>
        <p className="text-sm text-gray-500 text-center mb-4">
          Commencez votre expérience Luxe Haven dès aujourd’hui
        </p>

        {errorMsg && <p className="text-red-500 text-sm text-center mb-4">{errorMsg}</p>}

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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
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
                required
                placeholder=""
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition"
              />
              <div
                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          {/* Bouton d'inscription */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-secondary hover:bg-secondary/90 text-white py-2 rounded-lg shadow-md transition font-medium ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Inscription en cours..." : "S’inscrire"}
          </button>
        </form>

        {/* Liens */}
        <div className="mt-6 text-center">
          <Link to="/connexion" className="text-sm text-secondary hover:underline font-medium">
            Déjà un compte ? Connectez-vous
          </Link>
          <div className="mt-2">
            <Link
              to="/forgot-password"
              className="text-xs text-gray-500 hover:text-secondary transition"
            >
              Mot de passe oublié ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;