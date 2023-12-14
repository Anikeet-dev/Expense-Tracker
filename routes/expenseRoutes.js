
const express = require('express');
const expenseController = require('../controllers/expenseController');
const router = express.Router();

router.get('/user/signup-page', expenseController.signupPage);
router.post('/user/signup', expenseController.createUser);
router.get('/user/login', expenseController.getLogin);
router.get('/get-expenses', expenseController.getExpenses);
router.put('/edit-expense/:id', expenseController.editExpense);
router.post('/create-expense', expenseController.createExpense);
router.delete('/delete-expense/:id', expenseController.deleteExpense);

module.exports = router;
