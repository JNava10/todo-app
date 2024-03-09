const TaskController = require('../controllers/task.controller');

const express = require('express');
const {validateToken} = require("../helpers/jsonWebToken");
const router = express.Router();

router.post('/', [validateToken], TaskController.save);
router.get('/', TaskController.getByName);
router.get('/:userId', TaskController.getUserAll);
router.delete('/:id',  TaskController.delete);

module.exports = router;