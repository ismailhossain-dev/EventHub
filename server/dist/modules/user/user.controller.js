// file-2 user  rq res handle
import {} from "express";
import { userService } from "./user.service.js";
const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create user",
            error,
        });
    }
};
// Delete user
const deleteUser = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email || typeof email !== "string") {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }
        const user = await userService.deleteUser(email);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: user,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to delete user",
        });
    }
};
//Get Single user by email
const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.query;
        if (!email || typeof email !== "string") {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User retrieved successfully",
            data: user,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to get user",
        });
    }
};
export const userController = {
    createUser,
    deleteUser,
    getUserByEmail
};
//# sourceMappingURL=user.controller.js.map