import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
  title: { type: String, required: [true, "Title is required"] },
  content: { type: String, required: [true, "content is required"] },
  course: { type: Schema.Types.ObjectId, ref: "Course" },
});

export default model("Note", NoteSchema);
