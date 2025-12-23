const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

/* =========================
   TRUST PROXY (RENDER)
========================= */
app.set("trust proxy", 1);

/* =========================
   CORS CONFIG (MOBILE SAFE)
========================= */
const allowedOrigins = [
  "https://hotellerie.onrender.com",
  "http://localhost:3000",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Mobile / Safari peut envoyer origin = undefined
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS blocked"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "Origin",
      "X-Requested-With",
    ],
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

// IMPORTANT pour Safari / mobile
app.options("*", cors());

/* =========================
   BODY PARSING (MOBILE)
========================= */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.status(200).send("Backend Hotellerie OK");
});

/* =========================
   ROUTES
========================= */
const registerRoute = require("./src/routes/auth.register");
app.use("/api/auth", registerRoute);

/* =========================
   MONGODB
========================= */
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => console.log("MongoDB connecté avec succès"))
  .catch((err) => console.error("Erreur MongoDB :", err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});