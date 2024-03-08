const models = require("../models");

class UserQuery {
    static save = async (nickName) => {
        try {
            return await models.User.create({nickName: nickName});
        } catch (e) {
            return false;
        }
    }

    static checkUserCredentials = async (email, password, userName = null) => {
        try {
            if (!userName) {
                return await models.User.findOne({
                    where: {
                        email: email,
                        password: password,
                    }
                });
            } else  {
                return await models.User.findOne({
                    where: {
                        userName: userName,
                        password: password,
                    }
                });
            }
        } catch (e) {
            return false;
        }
    }

    static findUserByEmail = async (email) => {
        try {
            return await models.User.findOne({
                where: {
                    email: email,
                }
            });
        } catch (e) {
            return false;
        }
    }

    static findUserByNickname = async (nickName) => {
        try {
            return await models.User.findOne({
                where: {
                    nickName: nickName,
                }
            });
        } catch (e) {
            return false;
        }
    }
}

module.exports = UserQuery;