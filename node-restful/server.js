const http = require('http');
const app = require('./app');

//Definindo em qual porta o servidor vai rodar
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);