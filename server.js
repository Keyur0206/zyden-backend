// server.js
import "dotenv/config";
import app from "./app.js";
import connectDB from "./src/config/db.js";

// DB Connection
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
