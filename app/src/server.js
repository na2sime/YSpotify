const http = require("http");
const app = require("./app");
const serverController = require("././middlewares/server.middleware");
const swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");

const port = serverController.normalizePort(process.env.PORT || "4000");
app.set("port", port);

const server = http.createServer(app);


server.on("error", serverController.errorHandler);
server.on("listening", () => {
    const address = server.address();
    const bind = typeof address === "string" ? "pipe " + address : "port: " + port;
    console.info("---------------------------------");
    console.info("=>         YSpotify API         <=");
    console.info("Service en éxécution sur le " + bind);
    console.info("URL: http://localhost:" + port);
    console.info("Documentation: http://localhost:" + port + "/api-docs")
    console.info("---------------------------------");
});

server.listen(port);