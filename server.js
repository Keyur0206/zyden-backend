import "dotenv/config";
import app from "./app.js";
import connectDB from "./src/config/db.js";

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
