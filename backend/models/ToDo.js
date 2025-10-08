import { Schema, model } from "mongoose";

const toDoSchema = new Schema({
  content: { type: String, required: [true, "content is required"] },
  time: { type: Number, required: [true, "time is required"] },
  checked: { type: Boolean, required: [true, "checked is required"] },
  unit: { type: String, required: [true, "unit is required"] },
  course: {
    type: Schema.Types.String,
    ref: "Course",
    required: [true, "course ref is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ref is required"],
  },
});

export default model("ToDo", toDoSchema);
