const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nom: { type: String, required: true, minlength: 2, trim: true },
  postnom: { type: String, required: true, minlength: 2, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, // empêche les doublons
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, "Adresse email invalide"]
  },
  password: { type: String, required: true, minlength: 8 },
  isActive: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// S'assure que l'index unique est créé
userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("User", userSchema);