// Import de la fonction d’envoi d’email
const sendEmail = require("../user_mail/sendEmail");

// ===============================
// 1️⃣ EMAIL D’AVERTISSEMENT (3 tentatives)
// ===============================
const sendWarningEmail = async (email, nom) => {
  await sendEmail({
    to: email,
    subject: "Alerte sécurité - Tentatives de connexion détectées",
    html: `
    <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;background:#ffffff;border-radius:12px;padding:30px;border:1px solid #eee">

      <div style="text-align:center;margin-bottom:20px">
        <h2 style="color:#dc2626;">⚠️ Alerte de sécurité</h2>
      </div>

      <p style="color:#333;font-size:15px;line-height:1.6">
        Bonjour ${nom},<br/><br/>
        Nous avons détecté plusieurs tentatives de connexion échouées sur votre compte.
      </p>

      <div style="background:#fef2f2;padding:15px;border-radius:8px;margin-top:20px">
        <p style="margin:0;color:#7f1d1d;font-size:14px;">
          Si vous n'êtes pas à l’origine de ces tentatives, nous vous recommandons de modifier votre mot de passe immédiatement.
        </p>
      </div>

      <hr style="margin:30px 0;border:none;border-top:1px solid #eee"/>

      <p style="font-size:12px;color:#999;text-align:center">
        © ${new Date().getFullYear()} Hotellerie — Sécurité des comptes
      </p>
    </div>
    `,
  });
};


// ===============================
// 2️⃣ EMAIL BLOCAGE TEMPORAIRE (5 tentatives)
// ===============================
const sendTemporaryBlockEmail = async (email, nom) => {
  await sendEmail({
    to: email,
    subject: "Compte temporairement bloqué - Hotellerie",
    html: `
    <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;background:#ffffff;border-radius:12px;padding:30px;border:1px solid #eee">

      <div style="text-align:center;margin-bottom:20px">
        <h2 style="color:#ea580c;">⛔ Compte temporairement bloqué</h2>
      </div>

      <p style="color:#333;font-size:15px;line-height:1.6">
        Bonjour ${nom},<br/><br/>
        Suite à plusieurs tentatives de connexion échouées, votre compte a été bloqué temporairement pendant 15 minutes.
      </p>

      <div style="background:#fff7ed;padding:15px;border-radius:8px;margin-top:20px">
        <p style="margin:0;color:#9a3412;font-size:14px;">
          Ce blocage est une mesure de protection automatique pour sécuriser votre compte.
        </p>
      </div>

      <hr style="margin:30px 0;border:none;border-top:1px solid #eee"/>

      <p style="font-size:12px;color:#999;text-align:center">
        © ${new Date().getFullYear()} Hotellerie — Sécurité des comptes
      </p>
    </div>
    `,
  });
};


// ===============================
// 3️⃣ EMAIL BLOCAGE DÉFINITIF (7 tentatives)
// ===============================
const sendPermanentBlockEmail = async (email, nom) => {
  await sendEmail({
    to: email,
    subject: "Compte bloqué définitivement - Action requise",
    html: `
    <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;background:#ffffff;border-radius:12px;padding:30px;border:1px solid #eee">

      <div style="text-align:center;margin-bottom:20px">
        <h2 style="color:#991b1b;">🔒 Compte bloqué définitivement</h2>
      </div>

      <p style="color:#333;font-size:15px;line-height:1.6">
        Bonjour ${nom},<br/><br/>
        Votre compte a été définitivement bloqué suite à des tentatives répétées de connexion échouées.
      </p>

      <div style="background:#fef2f2;padding:15px;border-radius:8px;margin-top:20px">
        <p style="margin:0;color:#7f1d1d;font-size:14px;">
          Pour réactiver votre compte, veuillez contacter l’administrateur.
        </p>
      </div>

      <hr style="margin:30px 0;border:none;border-top:1px solid #eee"/>

      <p style="font-size:12px;color:#999;text-align:center">
        © ${new Date().getFullYear()} Hotellerie — Sécurité renforcée
      </p>
    </div>
    `,
  });
};

module.exports = {
  sendWarningEmail,
  sendTemporaryBlockEmail,
  sendPermanentBlockEmail,
};