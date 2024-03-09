const models = require("../models");

class TaskQuery {
    static save = async (name, userId) => {
        try {
            const taskData = {
                name: name
            }

            const task = await models.Task.create(taskData);

            console.log(task)

            const userTaskData = {
                taskId: task.id,
                userId: userId
            }

            await models.UserTask.create(userTaskData)

            return task
        } catch (e) {
            console.error(e)
            return false;
        }
    }

    static getById = async (id) => {
        try {
            return await models.Task.findOne({id: id});
        } catch (e) {
            console.error(e)
            return false;
        }
    }

    static getByName = async (name) => {
        try {
            return await models.Task.findOne({name: name});
        } catch (e) {
            console.error(e)
            return false;
        }
    }

    static getByUserId = async (userId) => {
        try {
            // TODO
            return await models.Task.findOne();
        } catch (e) {
            console.error(e)
            return false;
        }
    }


    static complete = async (id) => {
        try {
            return await models.Task.update({id: id});
        } catch (e) {
            console.error(e)
            return false;
        }
    }

    static updateName = async (id, name) => {
        try {
            return await models.Task.update({name: name}, {
                where: {id: id}
            });
        } catch (e) {
            console.error(e)
            return false;
        }
    }

    static delete = async (id) => {
        try {
            return await models.Task.destroy({
                where: {
                    id: id
                }
            });
        } catch (e) {
            console.error(e)
            return false;
        }
    }

}

module.exports = TaskQuery;