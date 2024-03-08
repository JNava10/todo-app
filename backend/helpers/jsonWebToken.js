const {tokenKey} = require('../constants');
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const token = req.headers[tokenKey];
    const {userId} = jwt.verify(token);

    next();
}

module.exports = {
    validateToken
}