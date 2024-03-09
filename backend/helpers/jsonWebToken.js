const {tokenKey} = require('../constants');
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const token = req.headers[tokenKey];

    if (!token) return res.status(401).json({msg: 'forbidden'});

    const {userId} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    req.userId = userId

    next();
}

module.exports = {
    validateToken
}