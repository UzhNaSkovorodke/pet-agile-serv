const db = require("../db");

class TaskController {
  async createTask(req, res) {
    const { title, description, userid, id, completed, typeboard } = req.body;
    console.log(title, description, userid, id, completed, typeboard);
    const newTask = await db.query(
      `INSERT INTO tasks (title, description, userid, id, completed, typeboard) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, description, userid, id, completed, typeboard]
    );
    res.json(newTask.rows[0]);
  }

  async getTasks(req, res) {
    const tasks = await db.query("SELECT * FROM tasks");
    res.json(tasks.rows);
  }

  async getTask(req, res) {
    const id = req.params.id;
    const tasks = await db.query("SELECT * FROM tasks where id=$1", [id]);
    res.json(tasks.rows[0]);
  }

  async deleteTask(req, res) {
    const id = req.params.id;
    const tasks = await db.query("DELETE FROM tasks where id=$1", [id]);
    res.json(tasks.rows[0]);
  }
}

module.exports = new TaskController();
