require('dotenv').config()
const Server = require('./server');

const server = new Server();
server.listen(process.env.HOST_PORT);

