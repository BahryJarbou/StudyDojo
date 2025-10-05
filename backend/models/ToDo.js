import { Schema, model } from "mongoose";

const toDoSchema = new Schema({
  content: { type: String, required: [true, "content is required"] },
  time: { type: Number, required: [true, "time is required"] },
  checked: { type: Boolean, required: [true, "checked is required"] },
  unit: { type: String, required: [true, "unit is required"] },
  course: { type: Schema.Types.String, ref: "Course" },
});

export default model("ToDo", toDoSchema);
