const prisma = require('../config/db.config');
const jwt = require('jsonwebtoken')
require('dotenv').config
const secretKey = process.env.TOKEN_SECRET;
exports.register = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        const payload = { id: user.id, name: user.name }
        const tokenStr = jwt.sign(payload, secretKey, { expiresIn: "1h" })

        const token = {
            tokenStr,
            id: user.id,
            name: user.name
        }
        return res.status(200).json({ msg: 'user created successfully', data: token })
    } catch (error) {
        return res.status(500).json({ msg: 'server error', data: error })
    }

}