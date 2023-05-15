const db = require("../db");

class TaskController {
  async createTask(req, res) {
    const { title, description, userid, id, completed } = req.body;
    const newTask = await db.query(
      `INSERT INTO tasks (title, description, userid, id, completed) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, description, userid, id, completed]
    );
    res.json(newTask.rows[0]);
  }

  async getTasks(req, res) {
    const userid = req.params.id;
    const tasks = await db.query("SELECT * FROM tasks WHERE userid=$1", [
      userid,
    ]);
    res.json(tasks.rows);
  }

  async getTask(req, res) {
    const id = req.params.id;
    const tasks = await db.query("SELECT * FROM tasks WHERE id=$1", [id]);
    res.json(tasks.rows[0]);
  }

  async deleteTask(req, res) {
    const id = req.params.id;
    const task = await db.query("DELETE FROM tasks WHERE id=$1", [id]);
    res.json("ok");
  }

  async updateTaskStatus(req, res) {
    const id = req.params.id;
    const { title, description, completed } = req.body;
    const task = await db.query(
      "UPDATE tasks set title=$1, description=$2, completed=$3 WHERE id=$4 RETURNING *",
      [title, description, completed, id]
    );
    res.json(task.rows[0]);
  }
}

module.exports = new TaskController();
