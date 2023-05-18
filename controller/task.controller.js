const db = require("../db");

class TaskController {
  async getTasks(req, res) {
    const user_id = req.query.user_id;
    const tasks = await db.query("SELECT * FROM tasks WHERE user_id=$1", [
      user_id,
    ]);
    res.json(tasks.rows);
  }

  async getTask(req, res) {
    const id = req.params.id;
    const user_id = req.query.user_id;
    const tasks = await db.query(
      "SELECT * FROM tasks WHERE id=$1 ANd user_id=$2",
      [id, user_id]
    );
    res.json(tasks.rows[0]);
  }

  async createTask(req, res) {
    const { title, description, id, completed, user_id, board_id } = req.body;

    const newTask = await db.query(
      `INSERT INTO tasks (title, description, id, completed,user_id, board_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, description, id, completed, user_id, board_id]
    );
    res.json(newTask.rows[0]);
  }

  async deleteTask(req, res) {
    const id = req.query.id;
    const task = await db.query("DELETE FROM tasks WHERE id=$1", [id]);
    res.json("ok");
  }

  async updateTask(req, res) {
    const id = req.params.id;
    const { title, description, completed, board_id } = req.body;
    const task = await db.query(
      "UPDATE tasks set title=$1, description=$2, completed=$3, board_id=$4 WHERE id=$5 RETURNING *",
      [title, description, completed, board_id, id]
    );
    res.json(task.rows[0]);
  }
}

module.exports = new TaskController();
