// Import d'express pour créer des routes
const express = require("express");

// Import de bcrypt pour comparer les mots de passe hashés
const bcrypt = require("bcrypt");

// Import du modèle User (table utilisateurs)
const User = require("../models/User");

// Création du routeur express
const router = express.Router();

// Route POST /login
// Elle reçoit email + mot de passe
router.post("/login", async (req, res) => {
  try {
    // Récupération des données envoyées dans le body
    const { email, password } = req.body;

    // 1️⃣ Vérification : champs obligatoires
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email et mot de passe requis",
      });
    }

    // 2️⃣ Recherche de l'utilisateur par email
    const user = await User.findOne({ email });

    // Si aucun utilisateur trouvé
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Email ou mot de passe incorrect",
      });
    }

    // 3️⃣ Vérification si le compte est activé
    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Veuillez activer votre compte par email",
      });
    }

    // 4️⃣ Comparaison du mot de passe tapé avec le hash en DB
    const isPasswordValid = await bcrypt.compare(
      password,       // mot de passe tapé
      user.password   // mot de passe hashé
    );

    // Si le mot de passe est incorrect
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Email ou mot de passe incorrect",
      });
    }

    // 5️⃣ Si tout est bon → succès
    return res.status(200).json({
      success: true,
      message: "Connexion réussie",
      user: {
        id: user._id,
        email: user.email,
        nom: user.nom,
      },
    });

  } catch (error) {
    // En cas d'erreur serveur
    console.error("Erreur login :", error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

// Export du routeur
module.exports = router;