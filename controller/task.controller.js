const db = require("../db");

class TaskController {
  async createTask(req, res) {
    const { title, description, userid, id, completed, typeboard } = req.body;
    console.log(id);
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
    const task = await db.query("DELETE FROM tasks where id=$1", [id]);
    res.json("ok");
  }

  async updateTaskStatus(req, res) {
    const id = req.params.id;
    const { title, description, completed, typeboard } = req.body;
    const task = await db.query(
      "UPDATE tasks set title=$1, description=$2, completed=$3, typeboard=$4 where id=$5 RETURNING *",
      [title, description, completed, typeboard, id]
    );
    res.json(task.rows[0]);
  }
}

module.exports = new TaskController();
