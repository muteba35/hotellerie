const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

/*CORS CONFIGURATION */
const allowedOrigins = [
  "https://hotellerie.onrender.com",
  "http://localhost:3000",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // autorise mobile / navigateur sans origin (ex: apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// important pour preflight (mobile)
app.options("*", cors());

/* MIDDLEWARES */
app.use(express.json());

/* TEST ROUTE*/
app.get("/", (req, res) => {
  res.send("Backend Hotellerie OK");
});

/* ROUTES*/
const registerRoute = require("./src/routes/auth.register");
app.use("/api/auth", registerRoute);

/* MONGODB*/
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté avec succès"))
  .catch((err) => console.error("Erreur MongoDB :", err));

/* SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Serveur lancé sur http://localhost:" + PORT);
});