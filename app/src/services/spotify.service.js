const axios = require('axios');
const User = require('../models/user.model');

exports.getAuthUrl = () => {
    const client_id = "12faf28e3cf44201b3be4245284466a3";
    const redirect_uri = "http://localhost:4000/api/spotify/callback";
    const scopes = 'user-read-private user-read-email';
    return 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri) +
        '&show_dialog=true';
}

exports.authenticate = async (code, id) => {
    if (code) {
        const authOptions = {
            method: 'post',
            url: `https://accounts.spotify.com/api/token`,
            params: {
                code: code,
                redirect_uri: 'http://localhost:4000/api/spotify/callback',
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from("12faf28e3cf44201b3be4245284466a3" + ':' + "84be983413e24044afcd1cb1434ab199").toString('base64')),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            json: true
        };
        try {
            const response = await axios(authOptions);
            if (response.status === 200) {
                const access_token = response.data.access_token,
                    refresh_token = response.data.refresh_token;
                await User.findOneAndUpdate({id: id}, {
                    access_token: access_token,
                    refresh_token: refresh_token
                });
                return "Access granted!."
            } else {
                throw "Something went wrong during authorization";
            }
        } catch (error) {
            throw "An error occurred during authorization";
        }
    } else {
        throw "An error occurred";
    }
}