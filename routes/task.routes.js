const TaskController = require('../controllers/task.controller');

const express = require('express');
const router = express.Router();

router.post('/',  TaskController.save);
router.get('/', TaskController.getByName);
router.get('/:userId',  TaskController.getUserAll);
router.delete('/:id',  TaskController.delete);

module.exports = router;