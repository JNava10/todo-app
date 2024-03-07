const UserQuery = require("../query/user.query");

class UserController {
    static save = async (req, res) => {
        const user = await UserQuery.save(req.body.nickName);

        return res.status(200).json(user)
    }
}

module.exports = UserController