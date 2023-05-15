const Router = require("express");
const router = new Router();
const TaskController = require("../controller/task.controller");

router.post("/task", TaskController.createTask);
router.get("/task/user:id", TaskController.getTasks);
router.get("/task/:id", TaskController.getTask);
router.delete("/task/:id", TaskController.deleteTask);
router.put("/task/:id", TaskController.updateTaskStatus);
module.exports = router;
