const jwt = require("jsonwebtoken"); // Token d'authentification
const {compare} = require("bcrypt");
const User = require("../models/user.model");

exports.login = async (username, password) => {
    const user = await User.findOne({username});
    if (!user) {
        throw new Error("User not found");
    }
    const validPassword = await compare(password, user.password);
    if (!validPassword) {
        throw new Error("Wrong Password");
    }
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "3h"});
    return {
        userId: user._id,
        token
    };
}

exports.verifyUser = (token) => {
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.userId;

        return {userId};
    } catch (error) {
        throw new Error("Invalid token");
    }
}