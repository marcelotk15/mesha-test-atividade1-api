const app = require("../app");

const { SERVER_PORT, SERVER_HOST } = require("../config/environments");
const { onListening, onError } = require("./server-listeners");

const server = app.listen(SERVER_PORT, SERVER_HOST);

server.on("listening", () => onListening(server));
server.on("error", (err) => onError(err, SERVER_PORT));
