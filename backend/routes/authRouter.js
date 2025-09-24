import { Router } from "express";
import { login, register } from "../controllers/auth.js";
import verifyToken from "../middlewares/auth.js";

const authRouter = Router();

authRouter.post("/signin", login);
authRouter.post("/signup", register);

export default authRouter;
