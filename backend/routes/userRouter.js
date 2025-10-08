import { Router } from "express";

import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
import verifyToken from "../middlewares/auth.js";

const userRouter = Router();

userRouter.route("/").get(getUsers);
userRouter
  .route("/:id")
  .get(getUserById)
  .put(verifyToken, updateUser)
  .delete(deleteUser);

export default userRouter;
