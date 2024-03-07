require('dotenv').config()
const Server = require('./server');

const server = new Server();
server.listen();

console.log(`Server listening on: http://${process.env.HOST_IP}:${process.env.HOST_PORT}`);