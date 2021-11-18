const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRouter = require("./routers/routes/todo");
const userRouter = require("./routers/routes/users");
const roleRouter = require("./routers/routes/role");
require("./db");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/todos", todoRouter);
app.use("/users", userRouter);
app.use("/roles",roleRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Run on port ${PORT}`);
});
