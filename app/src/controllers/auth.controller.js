const userService = require("../services/auth.service");

exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const result = await userService.login(username, password);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.isConnected = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const result = userService.verifyUser(token);

        req.auth = {
            userId: result.userId,
        };
        res.status(200).json({ isConnected: true });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}