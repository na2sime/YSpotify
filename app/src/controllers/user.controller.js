const userService = require("../services/user.service");

exports.signup = async (req, res, next) => {
    try {
        await userService.createUser(req.body.username, req.body.password);
        res.status(201).json({message: "User created successfully !"});
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({error: "User not found"});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error});
    }
};

exports.getUserByUsername = async (req, res) => {
    try {
        const user = await userService.getUserByUsername(req.params.username);
        if (!user) {
            return res.status(404).json({error: "User not found"});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error});
    }
};