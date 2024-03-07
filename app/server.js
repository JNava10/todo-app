const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.rootEndpoint = '/api';
        this.middlewares();
        this.routes();

    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(`${this.rootEndpoint}/user`, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(process.env.PORT)
    }
}

module.exports = Server;