const express = require("express");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const User = require("../models/User");
const sendEmail = require("../user_mail/sendEmail");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { nom, postnom, email, password } = req.body;

    // =========================
    // ⿡ VALIDATIONS
    // =========================
    if (!nom || nom.length < 2) {
      return res.status(400).json({ message: "Nom invalide" });
    }

    if (!postnom || postnom.length < 2) {
      return res.status(400).json({ message: "Postnom invalide" });
    }

    if (!email || !email.includes("@")) {
      return res.status(400).json({ message: "Email invalide" });
    }

    if (!password) {
      return res.status(400).json({ message: "Mot de passe requis" });
    }

    // =========================
    // ⿢ VÉRIFIER EMAIL UNIQUE
    // =========================
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    // =========================
    // ⿣ FORCE DU MOT DE PASSE
    // =========================
    const passwordRegex =
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Mot de passe faible : 8 caractères minimum, une majuscule, un chiffre et un caractère spécial",
      });
    }

   
    // HASH DU MOT DE PASSE
 
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

     //Lien d’activation
       const activationLink = '${process.env.BACKEND_URL}/api/auth/verify-email/${activationToken}';
   
       //Envoi de l’email
       await sendEmail({
         to: email,
         subject: "Confirmation de votre compte Hotellerie",
         html: `
           <h2>Bienvenue sur Hotellerie 👋</h2>
           <p>Merci de vous être inscrit.</p>
           <p>Cliquez sur le lien ci-dessous pour activer votre compte :</p>
           <a href="${activationLink}">${activationLink}</a>
           <p>⏳ Ce lien est valide pendant 1 heure.</p>
           <p>Si vous n’êtes pas à l’origine de cette demande, ignorez cet email.</p>
         `,
       });


    // RÉPONSE AU FRONTEND
    return res.status(201).json({
      message:
        "Compte créé avec succès. Veuillez vérifier votre email pour activer votre compte.",
    });
  } catch (error) {
    console.error("ERREUR REGISTER :", error);
    return res.status(500).json({
      message: "Erreur serveur. Veuillez réessayer plus tard.",
    });
  }
});

module.exports = router;