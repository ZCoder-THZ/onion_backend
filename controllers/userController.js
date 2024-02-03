const prisma = require('../config/db.config');
const { hashPassword, generateToken, comparePassword } = require('../utils/authUtils')

exports.register = async (req, res) => {
    const { name, email, password } = req.body

    const hashedPassword = await hashPassword(password)

    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })
        const payload = { id: user.id, name: user.name }
        const tokenStr = generateToken(payload)
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

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        const comparedPassword = await comparePassword(password, user.password)

        if (comparedPassword) {
            const payload = { id: user.id, name: user.name };
            const tokenStr = generateToken(payload)
            const token = {
                tokenStr,
                id: user.id,
                name: user.name
            }
            return res.status(200).json({ msg: 'loggedin successfully', data: token })

        } else {
            return res.status(401).json({ msg: 'invalid password', status: 401 })
        }

    } catch (error) {
        return res.status(500).json({ msg: 'server error', data: error })
    }
}
