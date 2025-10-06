import { Schema, model } from "mongoose";

const FlashcardSchema = new Schema({
  question: { type: String, required: [true, "Question is required"] },
  answer: { type: String, required: [true, "Answer is required"] },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: [true, "course ref is required"],
  },
});

export default model("Flashcard", FlashcardSchema);
