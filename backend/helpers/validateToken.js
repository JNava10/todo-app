const {tokenKey} = require('../constants');
const jwt = require('jsonwebtoken');

const validateToken = (req, res) => {
    const token = req.headers[tokenKey];
    const {userId} = jwt.verify(token)
}

module.exports = {
    validateToken
}