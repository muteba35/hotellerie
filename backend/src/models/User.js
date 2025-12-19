const mongoose = require("mongoose");

// Définir le schéma utilisateur
const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    minlength: 2, // Minimum 2 caractères
    trim: true
  },
  postnom: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Empêche les doublons
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, "Adresse email invalide"]
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Minimum 8 caractères
  },
  isActive: {
    type: Boolean,
    default: false // Le compte est inactif tant que l'utilisateur n'a pas confirmé son email
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export du modèle
module.exports = mongoose.model("User", userSchema);