import { Router } from "express";
import { userController } from "./user.controller.js";

const router = Router();

router.post("/", userController.createUser);

export const useRoutes = router;


// Delete Router

router.delete("/", userController.deleteUser);

export const userDeleteRoutes = router;

// get user by email 

router.get("/", userController.getUserByEmail);
export const getSIngleUser = router; 

// login user authentication nextauth step-2
router.post("/login", userController.loginUser);

export const nextAuthRoutes = router; 