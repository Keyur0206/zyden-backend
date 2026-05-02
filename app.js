import cors from "cors";
import express from "express";
import authRoutes from "./src/routes/authRoutes.js";
import departmentRoutes from "./src/routes/departmentRoutes.js";
import employeeRoutes from "./src/routes/employeeRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/employees", employeeRoutes);

export default app;
