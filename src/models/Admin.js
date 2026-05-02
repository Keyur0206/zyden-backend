import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Admin name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      //   select: false,
    },

    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
    },

    // isActive: {
    //   type: Boolean,
    //   default: true,
    // },

    // lastLogin: {
    //   type: Date,
    // },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Admin", adminSchema);
