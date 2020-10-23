var express = require('express');
var router = express.Router();
var todoController = require('../controllers/todos')

/* GET users listing. */
router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);

module.exports = router;