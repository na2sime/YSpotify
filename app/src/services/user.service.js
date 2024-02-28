const bcrypt = require("bcrypt"); //Cryptage du mot de passe
const jwt = require("jsonwebtoken"); //Token d'authentification
const User = require("../models/user.model");

exports.createUser = async (username, password) => {
    const hash = await bcrypt.hash(password, 10); //Cryptage du mot de passe
    const user = new User({
        username: username,
        password: hash, //Mot de passe crypté
        spotifyToken: "",
        spotifyRefreshToken: "",
        spotifyTokenExpires: new Date(),
        spotifyId: "",
        spotifyDisplayName: ""
    });
    return await user.save(); //Enregistrement dans la base de données
}

exports.getUserById = async (id) => {
    return User.findOne({_id: id});
}

exports.getUserByUsername = async (username) => {
    return User.findOne({username: username});
}