const models = require("../models");

class UserQuery {
    static save = async (nickName) => {
        try {
            return await models.User.create({nickName: nickName});
        } catch (e) {
            return false;
        }
    }
}

module.exports = UserQuery;