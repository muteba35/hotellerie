const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  const msg = {
    to,
    from: process.env.EMAIL_FROM, // doit être vérifié dans SendGrid
    subject,
    html,
  };

  try {
    const response = await sgMail.send(msg);
    console.log("Email envoyé :", response[0].statusCode);
    return response;
  } catch (error) {
    console.error("Erreur envoi email :", error.response?.body || error.message);
    throw error;
  }
};

module.exports = sendEmail;