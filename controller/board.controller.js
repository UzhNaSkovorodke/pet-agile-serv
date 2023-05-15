const db = require("../db");

class BoardController {
  async createBoard(req, res) {
    const { title, id, userid, id_tasks } = req.body;
    const newBoard = await db.query(
      `INSERT INTO boards (title, id, userid, id_tasks ) VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, id, userid, id_tasks]
    );
    res.json(newBoard.rows[0]);
  }

  async getBoards(req, res) {
    const userid = req.params.id;
    const boards = await db.query("SELECT * FROM boards WHERE userid=$1", [
      userid,
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
    const { title, userid, id_tasks } = req.body;
    const board = await db.query(
      "UPDATE boards set title=$1, userid=$2, id_tasks=$3 WHERE id=$4 RETURNING *",
      [title, userid, id_tasks, id]
    );
    res.json(board.rows[0]);
  }
}

module.exports = new BoardController();
