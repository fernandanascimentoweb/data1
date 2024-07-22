const jsonServer = require("json-server");  // importando o json-server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3030;   // a configuracao da porta

server.use(middlewares);
server.use(router);

server.listen(port);