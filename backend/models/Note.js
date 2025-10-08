import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
  title: { type: String, required: [true, "Title is required"] },
  content: { type: String, required: [true, "content is required"] },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "course ref is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ref is required"],
  },
});

export default model("Note", NoteSchema);
