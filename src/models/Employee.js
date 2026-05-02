import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9]{10}$/, "Phone must be exactly 10 digits"],
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: [true, "Department is required"],
    },

    designation: {
      type: String,
      required: [true, "Designation is required"],
    },

    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [1, "Salary must be greater than 0"],
    },

    joiningDate: {
      type: Date,
      required: [true, "Joining date is required"],
      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: "Joining date cannot be in the future",
      },
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

employeeSchema.index({ name: "text", email: "text" });

export default mongoose.model("Employee", employeeSchema);
