import { Schema, model } from "mongoose";

const toDoSchema = new Schema({
  content: { type: String, required: [true, "content is required"] },
  course: { type: Schema.Types.String, ref: "Course" },
});

export default model("ToDo", toDoSchema);
