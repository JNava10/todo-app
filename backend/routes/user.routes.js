const UserController = require('../controllers/user.controller');

const express = require('express');
const AuthController = require("../controllers/auth.controller");
const router = express.Router();

router.post('/',  UserController.save);
router.post('/login',  AuthController.login);

module.exports = router;