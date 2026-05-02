import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Department name is required"],
      unique: true,
      trim: true,
      minlength: [2, "Department name must be at least 2 characters"],
    },
  },
  {
    timestamps: true,
  },
);

departmentSchema.set("autoIndex", true);

export default mongoose.model("Department", departmentSchema);
