const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/:id", userController.getUserById);
router.get("/:username", userController.getUserByUsername);
router.post("/signup", userController.signup);

module.exports = router;