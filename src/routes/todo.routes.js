const { getAllTodos, createTodo, getTodoById, deleteTodo,updateTodo } = require("../controller/todo.controller");

const router = require("express").Router();

router.route("/")
    .get(getAllTodos)
    .post(createTodo)

router.route("/:id")
    .get(getTodoById)
    .delete(deleteTodo)
    .patch(updateTodo)

module.exports = router;