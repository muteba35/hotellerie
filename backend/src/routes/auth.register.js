const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const sendEmail = require("../user_mail/sendEmail");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { nom, postnom, email, password } = req.body;

    // validations
    if (!nom || nom.length < 2)
      return res.status(400).json({ message: "Nom invalide" });

    if (!postnom || postnom.length < 2)
      return res.status(400).json({ message: "Postnom invalide" });

    if (!email || !email.includes("@"))
      return res.status(400).json({ message: "Email invalide" });

    if (!password)
      return res.status(400).json({ message: "Mot de passe requis" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email déjà utilisé" });

    // mot de passe sécurisé
   const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Mot de passe faible : 8 caractères minimum, au moins une majuscule et un caractère spécial",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //GÉNÉRATION DU TOKEN
    
        const activationToken = crypto.randomBytes(32).toString("hex");
    
        const activationTokenExpires = Date.now() + 60 * 60 * 1000; // +1h
    
      
        // CRÉATION UTILISATEUR
      
        const newUser = new User({
          nom,
          postnom,
          email,
          password: hashedPassword,
    
          isActive: false, // compte désactivé
          activationToken,
          activationTokenExpires,
        });

    await newUser.save();

    return res.status(201).json({
      message: "Utilisateur créé avec succès",
    });
  } catch (error) {
    console.error("ERREUR REGISTER :", error);
    return res.status(500).json({
      message: "Erreur serveur. Veuillez réessayer plus tard.",
    });
  }
});

module.exports = router;