const router = require('express').Router();
const expenses=require('./expenses/expenses')
router.use('/expenses',expenses)
module.exports = router;
