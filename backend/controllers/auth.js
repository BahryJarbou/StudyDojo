import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({ email }).select("+password");

    if (!user) throw new Error("Email or password are wrong");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Email or password are wrong");

    const payload = { _id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
    res.status(201).json({ token, user: payload });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;
    const found = await User.findOne({ email });
    if (found) throw new Error("User already exists");
    const user = await User.create({ email, password });
    const payload = { _id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });
    res.status(201).json({ token, user: payload });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { login, register };
