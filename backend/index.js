import express from "express";

import userRouter from "./routes/userRouter.js";
import "./db/index.js";
import cors from "cors";
import courseRouter from "./routes/courseRouter.js";
import noteRouter from "./routes/noteRouter.js";
import flashcardRouter from "./routes/flashcardRouter.js";
import toDoRouter from "./routes/toDoRouter.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({}));
app.use(express.json());

app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/notes", noteRouter);
app.use("/flashcards", flashcardRouter);
app.use("/todos", toDoRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
