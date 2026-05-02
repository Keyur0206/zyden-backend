import * as authService from "../services/authService.js";
import { generateToken } from "../utils/helper.js";

export const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Registration failed",
      data: null,
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await authService.loginUser(req.body);

    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Login failed",
      data: null,
    });
  }
};
