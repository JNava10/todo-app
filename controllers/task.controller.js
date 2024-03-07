const TaskQuery = require("../query/task.query");

class TaskController {
    static save = async (req, res) => {
        const task = await TaskQuery.save(req.body.name);

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
        const task = await TaskQuery.delete(req.params.id);

        return res.status(200).json(task);
    }
}

module.exports = TaskController