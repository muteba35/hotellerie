const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // IMPORTANT
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 15000,
  });

  // 🔍 Vérifie la connexion SMTP
  await transporter.verify();
  console.log("✅ SMTP connecté");


  await transporter.sendMail({
    from: `"Hotellerie" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
    console.log("Email envoyé");
};

module.exports = sendEmail;