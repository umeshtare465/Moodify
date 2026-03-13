const songModel = require("../models/song.model");
const id3 = require("node-id3");
const storageService = require("../services/storage.service");
async function uploadSong(req, res) {
  const songBuffer = req.file.buffer;
  const { mood } = req.body;
  const tags = id3.read(songBuffer);
  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      filename: tags.title + ".mp3" || "Unknown",
      folder: "/cohort2/moodify",
    }),
    storageService.uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + "_cover.jpg" || "Unknown_cover.jpg",
      folder: "/cohort2/moodify/posters",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title || "Unknown",
    url: songFile.url,
    posterUrl: posterFile.url,
    mood: mood || "happy",
  });
  res.status(201).json({
    message: "Song uploaded successfully",
    song,
  });
}
module.exports = {
  uploadSong,
};
