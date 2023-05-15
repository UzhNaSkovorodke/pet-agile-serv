const express = require("express");
const taskRouter = require("./routes/task.routes");
const boardRouter = require("./routes/boards.routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

app.use("/", taskRouter);

app.use("/", boardRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
