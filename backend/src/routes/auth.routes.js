const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
const authMiddleware = require("../middlewares/auth.middleware");
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

router.get("/get-me", authMiddleware.authUser, authController.getMe);

router.post("/logout", authController.logoutUser);
module.exports = router;
