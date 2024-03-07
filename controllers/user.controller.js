const {UserQuery} = require("../query/user.query");

class UserController {
    static save = async (req, res) => {
        await UserQuery.save(req.body.nickName)
    }
}

module.exports = UserController