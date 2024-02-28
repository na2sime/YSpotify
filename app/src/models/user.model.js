const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Helper function to DRY up the schema definition
function requiredStringSchema(unique = false) {
    return {type: String, required: true, trim: true, lowercase: true, unique};
}

const userSchema = new mongoose.Schema({
    password: requiredStringSchema(),  // password does not need to be unique
    username: requiredStringSchema(true),
    spotifyToken: requiredStringSchema(true),
    spotifyRefreshToken: requiredStringSchema(true),
    spotifyTokenExpires: {type: Date, required: true},
    spotifyId: requiredStringSchema(true),
    spotifyDisplayName: requiredStringSchema(true),
    teams: {type: mongoose.Schema.Types.ObjectId, ref: "Team"},
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);