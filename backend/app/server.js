const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(`/${process.env.ROOT_ENDPOINT}/user`, require('../routes/user.routes'));
        this.app.use(`/${process.env.ROOT_ENDPOINT}/task`, require('../routes/task.routes'));
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`Server listening on: http://${process.env.HOST_IP}:${port}/${process.env.ROOT_ENDPOINT
            }`);
        });
    }
}

module.exports = Server;