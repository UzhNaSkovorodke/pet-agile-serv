const express = require("express");
const taskRouter = require("./routes/task.routes");
const cors = require("cors");
const events = require("events");

var tasks = require("./tasks");
const list = tasks.list;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.use("/", taskRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
