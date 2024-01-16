const router = require('express').Router();
const expenses = require('./expenses/expenses')
const incomes = require('./incomes/incomes')
const users = require('./user/index')
router.use('/expenses', expenses)
router.use('/incomes', incomes)
router.use('/user', users)

module.exports = router;
