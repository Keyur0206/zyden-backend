// routes/authRoutes.js
import express from "express";
import { login, register } from "../controllers/authController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { loginAdminSchema, registerAdminSchema } from "../validations/adminValidation.js";

const router = express.Router();

router.post("/register", validate(registerAdminSchema), register);

router.post("/login", validate(loginAdminSchema), login);

export default router;
