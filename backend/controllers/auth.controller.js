const UserQuery = require("../query/user.query");
const jwt = require("jsonwebtoken");
require('dotenv').config()

class AuthController {
    static login = async (req, res) => {
        let user;

        if (req.body.nickName) {
            user = await UserQuery.findUserByNickname(
                req.body.nickName,
            );
        } else {
            user = await UserQuery.findUserByEmail(
                req.body.email,
            );
        }

        if (!user) {
            return res.status(200).json(false)
        }

        // TODO: Check roles

        const token = jwt.sign({ userId: user.id }, process.env.SECRETORPRIVATEKEY);

        return res.status(200).json({
            token: token,
            userId: user.id
        })
    }
}

module.exports = AuthController