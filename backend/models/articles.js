import { Schema, model } from "mongoose";

const articleSchema = new Schema({
  title: { type: String, required: [true, "title is required"] },
  content: { type: String, required: [true, "content is required"] },
  course: { type: Schema.Types.ObjectId, ref: "Course" },
});

export default model("Article", articleSchema);
