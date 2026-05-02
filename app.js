// app.js
import cors from "cors";
import express from "express";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
