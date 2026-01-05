require("dotenv").config();
const sendEmail = require("./src/user_mail/sendEmail");

sendEmail({
  to: process.env.EMAIL_USER,
  subject: "Test SMTP",
  html: "<h1>Ça marche</h1>",
})
  .then(() => console.log("✅ Test réussi"))
  .catch(err => console.error("Erreur SMTP :", err));