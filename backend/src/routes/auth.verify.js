const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/verify-email/:token", async (req, res) => {
  try {
    //recuperation du token a partir de l'url
    const { token } = req.params;

    // 1️⃣ Chercher l’utilisateur
    const user = await User.findOne({ activationToken: token });

    if (!user) {
      return res.status(400).json({
        message: "Lien invalide ou déjà utilisé",
      });
    }

    // 2️⃣ Vérifier expiration
    if (user.activationTokenExpires < Date.now()) {
      return res.status(400).json({
        message: "Lien expiré. Veuillez demander un nouveau lien.",
      });
    }

    // 3️⃣ Déjà activé ?
    if (user.isActive) {
      return res.status(400).json({
        message: "Compte déjà activé",
      });
    }

    // 4️⃣ Activation
    user.isActive = true;
    user.emailVerifiedAt = new Date();

    // 5️⃣ Suppression du token
    user.activationToken = undefined;
    user.activationTokenExpires = undefined;

    await user.save();

    // 6️⃣ Redirection frontend
    return res.redirect(
       `${process.env.FRONTEND_URL}/connexion`
    );

  } catch (error) {
    console.error("VERIFY EMAIL ERROR :", error);
    return res.status(500).json({
      message: "Erreur serveur",
    });
  }
});

module.exports = router;