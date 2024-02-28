const swaggerOptions = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "YSpotify",
            version: "0.1.0",
            description:
                "Simple API Documentation for YSpotify",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "YSpotify",
                url: "https://yspotify.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:4000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

module.exports = {swaggerOptions};