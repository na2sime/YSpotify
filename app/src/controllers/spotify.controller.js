const spotifyService = require('../services/spotify.service');

exports.login = (req, res) => {
    const authUrl = spotifyService.getAuthUrl();
    res.redirect(authUrl);
};

exports.callback = async (req, res) => {
    const {code} = req.query;
    console.log(code);
    try {
        const result = await spotifyService.authenticate(code, req.auth.userId);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
};