const UserController = require('../controllers/user.controller');

const express = require('express');
const router = express.Router();

router.post('/',  UserController.save);

module.exports = router;