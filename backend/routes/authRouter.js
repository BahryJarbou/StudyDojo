import { Router } from "express";
import { login, profile, register } from "../controllers/auth.js";
import verifyToken from "../middlewares/auth.js";

const authRouter = Router();

authRouter.post("/signin", login);
authRouter.post("/signup", register);
authRouter.get("/profile", verifyToken, profile);

export default authRouter;
