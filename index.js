const express = require("express");
const cors = require("cors");
const events = require("events");

var tasks = require("./tasks");
const list = tasks.list;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

const emitter = new events.EventEmitter();

app.get("/", (req, res) => {
  res.send(list);
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
