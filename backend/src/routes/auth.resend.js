const express = require("express");
const crypto = require("crypto");
const User = require("../models/User");
const sendEmail = require("../user_mail/sendEmail");

const router = express.Router();

router.post("/resend-verification", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email requis" });
    }

    // 1️⃣ Chercher utilisateur
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    if (user.isActive) {
      return res.status(400).json({ message: "Compte déjà activé" });
    }

    // 2️⃣ Nouveau token
    const activationToken = crypto.randomBytes(32).toString("hex");
    const activationTokenExpires = Date.now() + 60 * 60 * 1000;

    user.activationToken = activationToken;
    user.activationTokenExpires = activationTokenExpires;

    await user.save();

    // 3️⃣ Lien
    const activationLink = `${process.env.BACKEND_URL}/api/auth/verify-email/${activationToken}`;

    // 4️⃣ Email (DESIGN IDENTIQUE)
    await sendEmail({
      to: email,
      subject: `Nouveau lien de confirmation — ${new Date().toLocaleString()}`,
      html: `
      <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;background:#ffffff;border-radius:12px;padding:30px;border:1px solid #eee">
        
        <div style="text-align:center;margin-bottom:20px">
          <div style="display:inline-block;background:#2563eb;border-radius:12px;padding:14px">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="white">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            </svg>
          </div>
          <h2 style="margin-top:15px;color:#111">Hotellerie</h2>
        </div>

        <p style="color:#333;font-size:15px;line-height:1.6">
          Vous avez demandé un <strong>nouveau lien de confirmation</strong>.
          Cliquez sur le bouton ci-dessous pour activer votre compte.
        </p>

        <div style="text-align:center;margin:30px 0">
          <a href="${activationLink}"
            style="background:#2563eb;color:white;padding:14px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block">
            Confirmer mon compte
          </a>
        </div>

        <div style="background:#f9fafb;border-radius:8px;padding:15px;display:flex;gap:10px;align-items:flex-start">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="#2563eb">
            <path d="M6 2h12v2l-4 4 4 4v2H6v-2l4-4-4-4V2z"/>
          </svg>

          <p style="font-size:13px;color:#555;margin:0;line-height:1.5">
            Ce lien est valide pendant <strong>1 heure</strong>.
          </p>
        </div>

        <hr style="margin:30px 0;border:none;border-top:1px solid #eee"/>

        <p style="font-size:12px;color:#999;text-align:center">
          ©️ ${new Date().getFullYear()} Hotellerie — Tous droits réservés
        </p>
      </div>
      `,
    });

    console.log("📨 Nouveau lien envoyé :", email);

    return res.status(200).json({
      message: "Nouveau lien envoyé avec succès",
    });

  } catch (error) {
    console.error("RESEND ERROR :", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;