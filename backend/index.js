const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

/* =========================
   CORS CONFIG (SAFE)
========================= */
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://hotellerie.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // IMPORTANT pour mobile (Safari / Chrome)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ⚠ PAS DE "*" ICI
app.options("/", cors());

/* =========================
   MIDDLEWARES
========================= */
app.use(express.json());

/* =========================
   ROUTES
========================= */
app.get("/", (req, res) => {
  res.send("Backend Hotellerie OK");
});

const registerRoute = require("./src/routes/auth.register");
app.use("/api/auth", registerRoute);

/* =========================
   MONGODB
========================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté avec succès"))
  .catch((err) => console.error("Erreur MongoDB :", err));

/* =========================
   SERVER
========================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Serveur lancé sur le port " + PORT);
});