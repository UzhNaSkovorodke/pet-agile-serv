const Router = require("express");
const router = new Router();
const TaskController = require("../controller/task.controller");

router.post("/task", TaskController.createTask);
router.get("/task", TaskController.getTasks);
router.get("/task/:id", TaskController.getTask);
router.delete("/task/:id", TaskController.deleteTask);
module.exports = router;
