const express = require("express");
const router = express.Router();

const teamsController = require("../controllers/teams.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/join/:team", authMiddleware, teamsController.joinTeam);
router.get("/:name", authMiddleware, teamsController.getTeamByName);
router.get("/", authMiddleware, teamsController.getAllTeams);

module.exports = router;