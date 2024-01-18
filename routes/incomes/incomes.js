const router = require('express').Router();
const auth = require('../../middleware/auth')
const { getIncomes, createIncome } = require('../../controllers/incomeController');
router.route('/').get(getIncomes).post(createIncome)
// router.route('/:id').put(updateExpense).delete(deleteExpense).get(getExpenseById)

module.exports = router;
