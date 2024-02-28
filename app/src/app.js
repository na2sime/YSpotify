const express = require("express");
const bodyParser = require("body-parser"); //Package gére à analyser data dans corps des requêtes
const path = require("path"); // Package qui gère le chemin des fichier
const app = express();
const connectDatabase = require("./mongodb");
const corsMiddleware = require("./middlewares/cors.middleware");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const {swaggerOptions} = require("./swagger");

const specs = swaggerJsdoc(swaggerOptions);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        explorer: true
    })
);

connectDatabase().then(r => console.log(r));

//Custom le Headers des requêtes!
app.use(corsMiddleware);

app.use(bodyParser.json());

//Récuperer la data encodée sous forme URL
app.use(bodyParser.urlencoded({extended: true}));

//ROUTES
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/spotify", require("./routes/spotify.route"));
app.use("/api/user", require("./routes/user.route"));

module.exports = app;