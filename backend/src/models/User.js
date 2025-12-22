const mongoose = require("mongoose");

// Définition du schéma utilisateur
const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, "Le nom est requis"],
    minlength: [2, "Le nom doit contenir au moins 2 caractères"],
    trim: true
  },
  postnom: {
    type: String,
    required: [true, "Le post-nom est requis"],
    minlength: [2, "Le post-nom doit contenir au moins 2 caractères"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "L'email est requis"],
    unique: true, // empêche les doublons
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, "Adresse email invalide"]
  },
  password: {
    type: String,
    required: [true, "Le mot de passe est requis"],
    minlength: [8, "Le mot de passe doit contenir au moins 8 caractères"],
  },
  isActive: {
    type: Boolean,
    default: false // le compte est inactif tant que l'utilisateur n'a pas confirmé son email
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// IMPORTANT : ne pas recréer d'index supplémentaire si déjà unique dans le champ
// userSchema.index({ email: 1 }, { unique: true }); // <-- supprimer cette ligne

// Export du modèle
module.exports = mongoose.model("User", userSchema);