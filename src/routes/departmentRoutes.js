import express from "express";
import {
  createDepartment,
  deleteDepartment,
  getDepartments,
  updateDepartment,
} from "../controllers/departmentController.js";

import { isAdmin } from "../middleware/adminMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, isAdmin, createDepartment);
router.get("/", protect, isAdmin, getDepartments);
router.put("/:id", protect, isAdmin, updateDepartment);
router.delete("/:id", protect, isAdmin, deleteDepartment);

export default router;
