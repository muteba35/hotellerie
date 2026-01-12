const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const User = require("../models/User");
const sendEmail = require("../user_mail/sendEmail");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { nom, postnom, prenom , email, password } = req.body;

    // VALIDATIONS
    if (!nom || nom.length < 2)
      return res.status(400).json({ message: "Nom invalide" });

    if (!postnom || postnom.length < 2)
      return res.status(400).json({ message: "Postnom invalide" });

    if (!prenom || prenom.length < 2)
      return res.status(400).json({ message: "Prenom invalide" });

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
         <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;background:#ffffff;border-radius:12px;padding:30px;border:1px solid #eee">
    
    <!-- HEADER / LOGO -->
    <div style="text-align:center;margin-bottom:20px">
      <div style="display:inline-block;background:#2563eb;border-radius:12px;padding:14px">
        <!-- Shield / Logo -->
        <svg viewBox="0 0 24 24" width="36" height="36" fill="white">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
        </svg>
      </div>
      <h2 style="margin-top:15px;color:#111">Bienvenue sur Hotellerie</h2>
    </div>

    <!-- CONTENT -->
    <p style="color:#333;font-size:15px;line-height:1.6">
      Merci pour votre inscription.  
      Pour activer votre compte et sécuriser votre accès, veuillez confirmer votre adresse email en cliquant sur le bouton ci-dessous.
    </p>

    <!-- CTA BUTTON -->
    <div style="text-align:center;margin:30px 0">
      <a href="${activationLink}"
        style="background:#2563eb;color:white;padding:14px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">
        Confirmer mon compte
      </a>
    </div>

    <!-- INFO BLOCK -->
    <div style="background:#f9fafb;border-radius:8px;padding:15px;display:flex;gap:10px;align-items:flex-start">
      
      <!-- Hourglass SVG -->
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#2563eb" style="margin-top:2px">
        <path d="M6 2h12v2l-4 4 4 4v2H6v-2l4-4-4-4V2z"/>
      </svg>

      <p style="font-size:13px;color:#555;margin:0;line-height:1.5">
        Ce lien est valide pendant <strong>1 heure</strong>.  
        Passé ce délai, vous devrez en demander un nouveau.
      </p>
    </div>

    <!-- SECURITY INFO -->
    <div style="margin-top:15px;display:flex;gap:10px;align-items:flex-start">
      
      <!-- Lock SVG -->
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#16a34a" style="margin-top:2px">
        <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 8V7a3 3 0 016 0v3H9z"/>
      </svg>

      <p style="font-size:12px;color:#666;margin:0">
        Si vous n’êtes pas à l’origine de cette inscription, vous pouvez ignorer cet email en toute sécurité.
      </p>
    </div>

    <hr style="margin:30px 0;border:none;border-top:1px solid #eee"/>

    <!-- FOOTER -->
    <p style="font-size:12px;color:#999;text-align:center">
      © ${new Date().getFullYear()} Hotellerie — Tous droits réservés
    </p>
  </div>
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