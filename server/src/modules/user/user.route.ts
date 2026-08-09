import { Router } from "express";
import { userController } from "./user.controller.js";

const router = Router();

router.post("/", userController.createUser);

export const useRoutes = router;


// Delete Router
const deleteRouter = Router();

deleteRouter.delete("/", userController.deleteUser);

export const userDeleteRoutes = deleteRouter;