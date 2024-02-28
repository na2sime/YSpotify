const express = require("express");
const router = express.Router();

const spotifyController = require("../controllers/spotify.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/login", authMiddleware, spotifyController.login);
router.get("/callback", authMiddleware, spotifyController.callback);
/*
router.get("/me", authMiddleware, spotifyController.getMe);
router.get("/playlists", authMiddleware, spotifyController.getPlaylists);
router.get("/search", authMiddleware, spotifyController.search);
router.post("/play", authMiddleware, spotifyController.play);
router.post("/pause", authMiddleware, spotifyController.pause);
router.post("/next", authMiddleware, spotifyController.next);
router.post("/previous", authMiddleware, spotifyController.previous);
router.post("/create-playlist", authMiddleware, spotifyController.createPlaylist);

 */


module.exports = router;