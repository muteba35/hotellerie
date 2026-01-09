const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend Hotellerie OK");
});

// routes (ON LES DÉCLARE MAIS ON NE LES UTILISE PAS ENCORE)
const registerRoute = require("./src/routes/auth.register");
const verifyEmailRoute = require("./src/routes/auth.verify");

const PORT = process.env.PORT || 5000;

// CONNEXION MONGODB AVANT LES ROUTES
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connecté");
    console.log("DB NAME :", mongoose.connection.name);

    // DEBUG IMPORTANT
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log(
      "COLLECTIONS :",
      collections.map(c => c.name)
    );

    // ROUTES APRÈS CONNEXION
    app.use("/api/auth", registerRoute);
    app.use("/api/auth", verifyEmailRoute);

    app.listen(PORT, () => {
      console.log("Serveur lancé sur http://localhost:" + PORT);
    });
  })
  .catch((err) => {
    console.error("Erreur MongoDB :", err);
  });