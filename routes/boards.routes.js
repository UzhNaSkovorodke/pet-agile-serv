const Router = require("express");
const router = new Router();
const BoardController = require("../controller/board.controller");

router.get("/board/", BoardController.getBoards);
router.get("/board/:id", BoardController.getBoard);
router.post("/board", BoardController.createBoard);
router.delete("/board/", BoardController.deleteBoard);
router.put("/board/", BoardController.updateBoard);

module.exports = router;
