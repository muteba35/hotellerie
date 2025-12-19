const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User"); 

const router = express.Router();

// Route POST pour l'inscription
router.post("/register", async (req, res) => {
  try {
    const { nom, postnom, email, password } = req.body;

    // Validation côté backend
    if (!nom || nom.length < 2) return res.status(400).json({ message: "Nom invalide" });
    if (!postnom || postnom.length < 2) return res.status(400).json({ message: "Postnom invalide" });
    if (!email || !email.includes("@")) return res.status(400).json({ message: "Email invalide" });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email déjà utilisé" });

   const passwordRegex = /^[A-Z](?=.*[\W]).{7,}$/;

if (!passwordRegex.test(password)) {
  return res.status(400).json({
    message:
      "Mot de passe faible : 8 caractères minimum, commence par une majuscule et contient un caractère spécial"
  });
}
    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const newUser = new User({
      nom,
      postnom,
      email,
      password: hashedPassword,
      isActive: false // Compte inactif avant confirmation
    });

    await newUser.save();

    // Réponse au frontend
    res.status(201).json({ message: "Utilisateur créé avec succès ! Vérifiez votre email pour activer le compte." });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur. Veuillez réessayer plus tard." });
  }
});

module.exports = router;
