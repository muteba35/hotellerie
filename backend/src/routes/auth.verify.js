const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/verify-email/:token", async (req, res) => {
  try {
    //recuperation du token a partir de l'url
    const { token } = req.params;

     console.log("🔑 TOKEN REÇU :", token);

    // 1️⃣ Chercher l’utilisateur
    const user = await User.findOne({ activationToken: token });
      console.log("👤 USER TROUVÉ :", user);

    if (!user) {
       return res.redirect(
        `${process.env.FRONTEND_URL}/verification_email?status=invalid`
      );
    }

    console.log("⏰ EXPIRE :", user.activationTokenExpires);
    console.log("🕒 NOW :", Date.now());

    // 2️⃣ Vérifier expiration
    if (user.activationTokenExpires < Date.now()) {
     return res.redirect(
        `${process.env.FRONTEND_URL}/verification_email?status=expired`
      );
    }

    // 3️⃣ Déjà activé ?
    if (user.isActive) {
      return res.redirect(
         `${process.env.FRONTEND_URL}/verification_email?status=already`
      );
    }

    // 4️⃣ Activation
    user.isActive = true;
    user.emailVerifiedAt = new Date();

    // 5️⃣ Suppression du token
    user.activationToken = undefined;
    user.activationTokenExpires = undefined;

    await user.save();

    console.log("✅ COMPTE ACTIVÉ");
    console.log("TOKEN SAUVÉ :", user.activationToken);

    // 6️⃣ Redirection frontend
    return res.redirect(
      `${process.env.FRONTEND_URL}/verification_email?status=success`
    );

  } catch (error) {
    console.error("VERIFY EMAIL ERROR :", error);
   return res.redirect(
       `${process.env.FRONTEND_URL}/verification_email?status=error`
    );
  }
});

module.exports = router;