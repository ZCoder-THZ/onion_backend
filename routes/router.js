const router = require('express').Router();
const expenses=require('./expenses/expenses')
const incomes=require('./incomes/incomes')

router.use('/expenses',expenses)
router.use('/incomes',incomes)

module.exports = router;
