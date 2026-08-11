// file-2 user  rq res handle
import { type Request, type Response } from "express";
import { userService } from "./user.service.js";
// import bcrypt from "bcryptjs";
import { prisma } from "../../db/prisma.js";
const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error,
    });
  }
};

// Delete user
const deleteUser = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
};


//Get Single user by email

const getUserByEmail = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to get user",
    });
  }
};

// ==========================================
// Login User
// ==========================================
const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log("📧 Login email:", email);
    console.log("🔑 Login password:", password);

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    console.log("👤 User from DB:", user);

    if (!user) {
      console.log("❌ USER NOT FOUND");
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    console.log("🔐 Hashed password:", user.password);

    // const isPasswordValid = await bcrypt.compare(
    //   password,
    //   user.password
    // );
    const isPasswordValid = password
      
    

    console.log("🔍 Password matched:", isPasswordValid);

    if (!isPasswordValid) {
      console.log("❌ PASSWORD NOT MATCHED");

      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    console.log("✅ LOGIN SUCCESS");

    const { password: _, ...userData } = user;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: userData,
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const userController = {
  createUser,
  deleteUser,
  getUserByEmail,
  loginUser,
};