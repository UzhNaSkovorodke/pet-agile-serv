const db = require("../db");

class BoardController {
  async createBoard(req, res) {
    const { title, id, user_id, id_tasks } = req.body;
    const newBoard = await db.query(
      `INSERT INTO boards (title, id, user_id, id_tasks ) VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, id, user_id, id_tasks]
    );
    res.json(newBoard.rows[0]);
  }

  async getBoards(req, res) {
    const user_id = req.params.id;
    const boards = await db.query("SELECT * FROM boards WHERE user_id=$1", [
      user_id,
    ]);
    res.json(boards.rows);
  }

  async getBoard(req, res) {
    const id = req.params.id;
    const boards = await db.query("SELECT * FROM boards WHERE id=$1", [id]);
    res.json(boards.rows[0]);
  }

  async deleteBoard(req, res) {
    const id = req.params.id;
    await db.query("DELETE FROM boards WHERE id=$1", [id]);
    res.json("ok");
  }
  async updateBoard(req, res) {
    const id = req.params.id;
    const { title, user_id, id_tasks } = req.body;
    const board = await db.query(
      "UPDATE boards set title=$1, user_id=$2, id_tasks=$3 WHERE id=$4 RETURNING *",
      [title, user_id, id_tasks, id]
    );
    res.json("ok");
  }

  async updateBoardTasks(req, res) {
    const id = req.params.id;
    const { id_tasks } = req.body;

    const board = await db.query(
      "UPDATE boards set id_tasks=$1 WHERE id=$2 RETURNING *",
      [id_tasks, id]
    );
    res.json(board.rows);
  }
}

module.exports = new BoardController();
