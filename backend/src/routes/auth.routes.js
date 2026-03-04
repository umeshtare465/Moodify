const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
/**
 * @route post api/auth/registe
 * @description user registration
 */

router.post("/register", authController.registerUser);

/**
 * @route post api/auth/login
 * @description user login
 */
router.post("/login", authController.loginUser);
module.exports = router;
