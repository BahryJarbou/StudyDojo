import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, required: [true, "Email is required"] },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
  },
  { timestamps: true }
);

export default model("User", UserSchema);
