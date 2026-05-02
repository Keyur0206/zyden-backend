import express from "express";
import {
  createDepartment,
  deleteDepartment,
  getDepartments,
  updateDepartment,
} from "../controllers/departmentController.js";

import { isAdmin } from "../middleware/adminMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import {
  createDepartmentSchema,
  updateDepartmentSchema,
} from "../validations/departmentValidation.js";

const router = express.Router();

router.post("/", protect, isAdmin, validate(createDepartmentSchema), createDepartment);
router.get("/", protect, isAdmin, getDepartments);
router.put("/:id", protect, isAdmin, validate(updateDepartmentSchema), updateDepartment);
router.delete("/:id", protect, isAdmin, deleteDepartment);

export default router;
