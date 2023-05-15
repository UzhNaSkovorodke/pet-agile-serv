const Router = require("express");
const router = new Router();
const BoardController = require("../controller/board.controller");

router.get("/board/user:id", BoardController.getBoards);
router.get("/board/:id", BoardController.getBoard);
router.post("/board", BoardController.createBoard);
router.delete("/board/:id", BoardController.deleteBoard);
router.put("/board/:id", BoardController.updateBoard);

module.exports = router;
