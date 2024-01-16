const jwt = require('jsonwebtoken');
const prisma = require('../config/db.config')

require('dotenv').config();

const secretKey = process.env.TOKEN_SECRET;

const verifyUserToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("Access Denied/Unauthorized request step1")
    }

    try {
        const [type, tokenStr] = token.split(" ");
        if (type !== "Bearer") return res.status(401).send("Unauthorized request");

        if (tokenStr === null || !tokenStr) return res.status(401).send("Unauthorized request")

        const verifiedUser = jwt.verify(tokenStr, secretKey);

        if (!verifiedUser) return res.status(401).send("Unauthorized request")

        const { id } = verifiedUser;

        const user = await prisma.user.findUnique({
            where: { id }
        })
        if (!user) return res.status(401).send("Unauthorized request")

        req.user = { id: user }
        next()
    } catch (error) {
        return res.status(401).send("Unauthorized request")
    }
}
module.exports = { verifyUserToken }