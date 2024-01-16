const router = require('express').Router();
const { verifyUserToken } = require('../../middleware/auth')
const { register, login } = require('../../controllers/userController')
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/test').get(verifyUserToken, (req, res) => {
    return res.status(200).json({ msg: "success", data: req.user });
});

module.exports = router