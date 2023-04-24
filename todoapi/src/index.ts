import express from "express";
import todosRouter from "./routes/todos.route";

const app = express();
const port = 4545;

app.use(express.json());

app.use("/api/todos", todosRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
