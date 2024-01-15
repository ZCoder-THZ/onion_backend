const router=require('express').Router();
const {register}=require('../../controllers/userController')
router.route('/register').post(register)

module.exports=router