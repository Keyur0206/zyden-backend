// routes/employeeRoutes.js
import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getDeletedEmployees,
  getEmployees,
  permanentDeleteEmployee,
  restoreEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";

import { isAdmin } from "../middleware/adminMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import { createEmployeeSchema, updateEmployeeSchema } from "../validations/employeeValidation.js";

const router = express.Router();

router.post("/", protect, isAdmin, validate(createEmployeeSchema), createEmployee);
router.get("/", protect, isAdmin, getEmployees);
router.put("/:id", protect, isAdmin, validate(updateEmployeeSchema), updateEmployee);
router.delete("/:id", protect, isAdmin, deleteEmployee);
router.get("/deleted", protect, isAdmin, getDeletedEmployees);
router.put("/restore/:id", protect, isAdmin, restoreEmployee);
router.delete("/permanent/:id", protect, isAdmin, permanentDeleteEmployee);

export default router;
