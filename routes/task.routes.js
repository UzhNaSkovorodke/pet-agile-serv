const Router = require("express");
const router = new Router();
const TaskController = require("../controller/task.controller");

router.get("/task/", TaskController.getTasks);
router.get("/task/:id", TaskController.getTask);
router.post("/task/", TaskController.createTask);
router.delete("/task/", TaskController.deleteTask);
router.put("/task/:id", TaskController.updateTask);
module.exports = router;
