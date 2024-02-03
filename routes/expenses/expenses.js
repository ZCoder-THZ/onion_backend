const router = require('express').Router();
const { verifyUserToken } = require('../../middleware/auth')

const { getExpenses, createExpense, updateExpense, deleteExpense, getExpenseById } = require('../../controllers/expenseController');
router.route('/').get(verifyUserToken, getExpenses).post(verifyUserToken, createExpense)
router.route('/:id').put(updateExpense).delete(deleteExpense).get(getExpenseById)

module.exports = router;
