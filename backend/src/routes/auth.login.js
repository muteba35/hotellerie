// ===============================
// IMPORTS
// ===============================

// Import du framework Express (pour créer des routes API)
const express = require("express");

// Import de bcrypt (pour comparer les mots de passe hashés)
const bcrypt = require("bcrypt");

// Import du modèle User (schéma MongoDB)
const User = require("../models/User");

// Création d’un routeur Express
// Le routeur permet de séparer les routes par fichier
const router = express.Router();


// ===============================
// ROUTE POST /login
// ===============================
// Cette route permet à un utilisateur de se connecter
// Elle reçoit : email + password
router.post("/login", async (req, res) => {
  try {

    // ===============================
    // 1️⃣ RÉCUPÉRATION DES DONNÉES
    // ===============================

    // On récupère les données envoyées par le frontend
    // (via axios ou fetch)
    const { email, password } = req.body;


    // ===============================
    // 2️⃣ VÉRIFICATION DES CHAMPS
    // ===============================

    // Si l’email ou le mot de passe est vide
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Veuillez renseigner votre adresse email et votre mot de passe.",
      });
    }


    // ===============================
    // 3️⃣ RECHERCHE UTILISATEUR
    // ===============================

    // On cherche un utilisateur en base avec cet email
    const user = await User.findOne({ email });

    // Si aucun utilisateur trouvé
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Identifiants incorrects.",
      });
    }


    // ===============================
    // 4️⃣ BLOCAGE DÉFINITIF
    // ===============================

    // Si le compte est bloqué définitivement
    if (user.isBlocked) {
      return res.status(403).json({
        success: false,
        message:
          "Votre compte a été bloqué pour des raisons de sécurité. Veuillez contacter l’administrateur pour réactivation.",
      });
    }


    // ===============================
    // 5️⃣ BLOCAGE TEMPORAIRE
    // ===============================

    // Si lockUntil existe ET que la date actuelle est inférieure
    // cela signifie que le blocage temporaire est toujours actif
    if (user.lockUntil && user.lockUntil > Date.now()) {

      // Calcul du temps restant en minutes
      const minutesLeft = Math.ceil(
        (user.lockUntil - Date.now()) / 60000
      );

      return res.status(403).json({
        success: false,
        message: `Compte temporairement bloqué. Veuillez réessayer dans ${minutesLeft} minute(s).`,
      });
    }


    // ===============================
    // 6️⃣ VÉRIFICATION DU MOT DE PASSE
    // ===============================

    // bcrypt.compare compare :
    // - le mot de passe tapé
    // - le mot de passe hashé en base
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );


    // ===============================
    // 7️⃣ SI MOT DE PASSE INCORRECT
    // ===============================

    if (!isPasswordValid) {

      // On augmente le compteur de tentatives
      user.loginAttempts += 1;


      // Avertissement à 3 tentatives
      if (user.loginAttempts === 3) {
        await user.save();

        return res.status(401).json({
          success: false,
          message:
            "Attention : plusieurs tentatives échouées détectées. Votre compte sera temporairement bloqué après 5 tentatives.",
        });
      }


      // Blocage temporaire à 5 tentatives
      if (user.loginAttempts === 5) {

        // On bloque pendant 15 minutes
        user.lockUntil = Date.now() + 15 * 60 * 1000;

        await user.save();

        return res.status(403).json({
          success: false,
          message:
            "Pour des raisons de sécurité, votre compte est temporairement bloqué pendant 15 minutes suite à plusieurs tentatives infructueuses.",
        });
      }


      // Blocage définitif à 7 tentatives
      if (user.loginAttempts >= 7) {

        // On bloque définitivement
        user.isBlocked = true;

        await user.save();

        return res.status(403).json({
          success: false,
          message:
            "Votre compte a été définitivement bloqué suite à des tentatives répétées. Veuillez contacter l’administrateur.",
        });
      }


      // Sauvegarde simple si 1 ou 2 tentatives
      await user.save();

      return res.status(401).json({
        success: false,
        message: "Identifiants incorrects.",
      });
    }


    // ===============================
    // 8️⃣ SI MOT DE PASSE CORRECT
    // ===============================

    // On remet le compteur à zéro
    user.loginAttempts = 0;

    // On enlève le blocage temporaire
    user.lockUntil = undefined;

    await user.save();


    // ===============================
    // 9️⃣ RÉPONSE DE SUCCÈS
    // ===============================

    return res.status(200).json({
      success: true,
      message: "Connexion réussie.",
      user: {
        id: user._id,
        email: user.email,
        nom: user.nom,
      },
    });

  } catch (error) {

    // ===============================
    // ERREUR SERVEUR
    // ===============================

    console.error("Erreur login :", error);

    return res.status(500).json({
      success: false,
      message:
        "Une erreur interne est survenue. Veuillez réessayer ultérieurement.",
    });
  }
});


// ===============================
// EXPORT DU ROUTEUR
// ===============================

module.exports = router;