const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const User = require("../models/User");
const sendEmail = require("../user_mail/sendEmail");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { nom, postnom, email, password } = req.body;

    // VALIDATIONS
    if (!nom || nom.length < 2)
      return res.status(400).json({ message: "Nom invalide" });

    if (!postnom || postnom.length < 2)
      return res.status(400).json({ message: "Postnom invalide" });

    if (!email || !email.includes("@"))
      return res.status(400).json({ message: "Email invalide" });

    if (!password)
      return res.status(400).json({ message: "Mot de passe requis" });

    // EMAIL UNIQUE
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email déjà utilisé" });

    // FORCE MOT DE PASSE 
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Mot de passe faible : 8 caractères minimum, une majuscule, un chiffre et un caractère spécial",
      });
    }

    // HASH
    const hashedPassword = await bcrypt.hash(password, 10);

    // TOKEN
    const activationToken = crypto.randomBytes(32).toString("hex");
    const activationTokenExpires = Date.now() + 60 * 60 * 1000;

    // CREATE USER
    const newUser = new User({
      nom,
      postnom,
      email,
      password: hashedPassword,
      isActive: false,
      activationToken,
      activationTokenExpires,
    });

    await newUser.save();

    // EMAIL
    const activationLink = `${process.env.BACKEND_URL}/api/auth/verify-email/${activationToken}`;

    await sendEmail({
      to: email,
      subject: "Confirmation de votre compte Hotellerie",
      html: `
        <h2>Bienvenue sur Hotellerie</h2>
        <p>Cliquez sur le lien pour activer votre compte :</p>
        <a href="${activationLink}">${activationLink}</a>
        <p>Valide 1 heure</p>
      `,
    });
    res.status(201).json({
      message: "Compte créé. Vérifiez votre email.",
    });
  } catch (error) {
    console.error("ERREUR REGISTER :", error);
    res.status(500).json({
      message: "Erreur serveur",
    });
  }
});

module.exports = router;