const router = require('express').Router();
const {getExpenses,createExpense,updateExpense,deleteExpense, getExpenseById}=require('../../controllers/expenseController');
router.route('/').get(getExpenses).post(createExpense)
router.route('/:id').put(updateExpense).delete(deleteExpense).get(getExpenseById)

module.exports = router;
