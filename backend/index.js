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

// routes
const registerRoute = require("./src/routes/auth.register");
const verifyEmailRoute = require("./src/routes/auth.verify");

app.use("/api/auth", registerRoute);
app.use("/api/auth", verifyEmailRoute);
 
// mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté avec succès"))
  .catch((err) => console.error("Erreur MongoDB :", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Serveur lancé sur http://localhost:" + PORT);
});