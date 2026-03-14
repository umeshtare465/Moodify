const express = require("express");
const router = express.Router();
const songController = require("../controllers/song.controllers");
const upload = require("../middlewares/upload.middleware");
/**
 * @route post api/songs
 *
 */

router.post("/", upload.single("song"), songController.uploadSong);

router.get("/", songController.getSong);
module.exports = router;
