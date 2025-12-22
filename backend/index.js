const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// CORS configuré pour ton frontend Netlify
app.use(cors({
  origin: "https://hottelerie.netlify.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// JSON middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend Hotellerie OK");
});

// Routes
const registerRoute = require("./src/routes/auth.register");
app.use("/api/auth", registerRoute);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté avec succès"))
  .catch(err => console.error("Erreur MongoDB :", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Serveur lancé sur port " + PORT));