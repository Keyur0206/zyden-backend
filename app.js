// app.js
import cors from "cors";
import express from "express";
import authRoutes from "./src/routes/authRoutes.js";
import departmentRoutes from "./src/routes/departmentRoutes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/departments", departmentRoutes);

export default app;
