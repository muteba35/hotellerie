const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const User = require("../models/User");
const sendEmail = require("../user_mail/sendEmail");
const rateLimit = require("express-rate-limit");

const router = express.Router();


module.exports = router;