const express = require('express');
const { createTodo, getTodos, getTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.use(auth);
router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
