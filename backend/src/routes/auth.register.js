const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { nom, postnom, email, password } = req.body;

    // validations
    if (!nom || nom.length < 2) return res.status(400).json({ message: "Nom invalide" });
    if (!postnom || postnom.length < 2) return res.status(400).json({ message: "Postnom invalide" });
    if (!email || !email.includes("@")) return res.status(400).json({ message: "Email invalide" });
    if (!password) return res.status(400).json({ message: "Mot de passe requis" });

    // Vérifie si email existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email déjà utilisé" });

    // Vérifie complexité mot de passe
    const passwordRegex = /^(?=.[A-Z])(?=.[\W]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: "Mot de passe faible : 8 caractères minimum, au moins une majuscule et un caractère spécial"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ nom, postnom, email, password: hashedPassword, isActive: false });
    await newUser.save();

    return res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    console.error("ERREUR REGISTER :", error);
    return res.status(500).json({ message: "Erreur serveur. Veuillez réessayer plus tard." });
  }
});

module.exports = router;