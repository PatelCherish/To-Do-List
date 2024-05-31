const router = require('express').Router();
const createTaskController = require('../Controller/CreateTodo')

router.post('/add',createTaskController.createTask);
router.get('/get',createTaskController.GetTask);
router.put('/update/:id',createTaskController.updateTask);
router.delete('/delete/:id',createTaskController.deleteTask);
module.exports = router