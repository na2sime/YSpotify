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
        paths: {
            "api/auth/login": {
                post: {
                    tags: [
                        "Auth"
                    ],
                    summary: "Log into the system",
                    requestBody: {
                        description: "User login",
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        username: {
                                            type: "string",
                                            example: "User1"
                                        },
                                        password: {
                                            type: "string",
                                            example: "password"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Successful Login",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            userId: {
                                                type: "string",
                                                example: "123456"
                                            },
                                            token: {
                                                type: "string",
                                                example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYifQ.5eD3X1wQ0Y"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Bad Request"
                        },
                        401: {
                            description: "Unauthorized"
                        }
                    }
                }
            },
            "api/spotify/login": {
                "get": {
                    "tags": [
                        "Spotify"
                    ],
                    "summary": "Log into the system using Spotify",
                    "responses": {
                        "200": {
                            "description": "Successful Login"
                        },
                        "400": {
                            "description": "Bad request"
                        },
                        "401": {
                            "description": "Unauthorized"
                        }
                    }
                }
            },
            "api/spotify/callback": {
                "get": {
                    "tags": [
                        "Spotify"
                    ],
                    "summary": "Handle Spotify OAuth callback",
                    "responses": {
                        "200": {
                            "description": "Callback handled successfully"
                        },
                        "400": {
                            "description": "Bad request"
                        },
                        "401": {
                            "description": "Unauthorized"
                        }
                    }
                }
            },
            "api/user/{id}": {
                "get": {
                    "tags": ["User"],
                    "summary": "Get user by ID",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "The user ID",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Successful operation"
                        },
                        "404": {
                            "description": "User not found"
                        }
                    }
                }
            },
            "api/user/{username}": {
                "get": {
                    "tags": ["User"],
                    "summary": "Get user by username",
                    "parameters": [
                        {
                            "name": "username",
                            "in": "path",
                            "required": true,
                            "description": "The username",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Successful operation"
                        },
                        "404": {
                            "description": "User not found"
                        }
                    }
                }
            },
            "api/user/signup": {
                "post": {
                    "tags": ["User"],
                    "summary": "User signup",
                    "requestBody": {
                        "required": true,
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "username": {
                                            "type": "string"
                                        },
                                        "password": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "User created successfully"
                        },
                        "400": {
                            "description": "Bad request"
                        }
                    }
                }
            },
            "api/teams/join/{team}": {
                "post": {
                    "tags": ["Teams"],
                    "summary": "Join a team",
                    "parameters": [
                        {
                            "name": "team",
                            "in": "path",
                            "required": true,
                            "description": "The team to join",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Successfully joined the team"
                        },
                        "404": {
                            "description": "Team not found"
                        }
                    }
                }
            },
            "api/teams/{name}": {
                "get": {
                    "tags": ["Teams"],
                    "summary": "Get team by name",
                    "parameters": [
                        {
                            "name": "name",
                            "in": "path",
                            "required": true,
                            "description": "The team name",
                            "schema": {
                                "type": "string"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Successful operation"
                        },
                        "404": {
                            "description": "Team not found"
                        }
                    }
                }
            },
            "api/teams/": {
                "get": {
                    "tags": ["Teams"],
                    "summary": "Get all teams",
                    "responses": {
                        "200": {
                            "description": "Successful operation",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "name": {
                                                    "type": "string"
                                                },
                                                "members": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Teams not found"
                        }
                    }
                }
            }
        }
    },
    apis: ["./routes/*.js"],
};

module.exports = {swaggerOptions};