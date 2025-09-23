import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  name: { type: String, required: [true, "name is required"] },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  youtube: { type: String },
  spotify: { type: String },
});

export default model("Course", courseSchema);
