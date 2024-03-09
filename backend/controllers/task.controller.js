const TaskQuery = require("../query/task.query");
const models = require('../models/index')

class TaskController {
    static save = async (req, res) => {
        const task = await TaskQuery.save(req.body.name, req.userId);

        return res.status(200).json(task);
    }

    static getByName = async (req, res) => {
        const task = await TaskQuery.getById(req.body.id);

        return res.status(200).json(task);
    }

    static getUserAll = async (req, res) => {
        const task = await TaskQuery.getById(req.body.id);

        return res.status(200).json(task);
    }

    static complete = async (req, res) => {
        const task = await TaskQuery.complete(req.params.id);

        return res.status(200).json(task);
    }

    static delete = async (req, res) => {
        const deleted = await TaskQuery.delete(req.params.id);

        return res.status(200).json(deleted === 1);
    }
}

module.exports = TaskController