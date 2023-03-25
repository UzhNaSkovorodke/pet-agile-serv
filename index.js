const express = require("express");
const cors = require("cors");
const events = require("events");

var tasks = require("./tasks");
const list = { title: "keny" };

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

const emitter = new events.EventEmitter();

app.get("/get-tasks", (req, res) => {
  emitter.once("new task", (message) => {
    res.json(message);
  });
});

app.post("/new-tasks", (req, res) => {
  const message = req.body;
  emitter.emit("new task", message);
  res.status(200);
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
