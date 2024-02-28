const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Helper function to DRY up the schema definition
function requiredStringSchema(unique = false) {
    return {type: String, required: true, trim: true, lowercase: true, unique};
}

const teamSchema = new mongoose.Schema({
    name: requiredStringSchema(true),
    admin: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
});

teamSchema.plugin(uniqueValidator);