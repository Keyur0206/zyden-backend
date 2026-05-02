import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

const getAdminEmails = () => {
  if (!process.env.ADMIN_EMAILS) return [];
  return process.env.ADMIN_EMAILS.split(",").map((e) => e.trim().toLowerCase());
};

export const registerUser = async ({ name, email, password }) => {
  const existingUser = await Admin.findOne({ email });

  if (existingUser) {
    throw new Error("Admin already exists");
  }

  const allowedEmails = getAdminEmails();

  if (!allowedEmails.includes(email.toLowerCase())) {
    throw new Error("Not authorized to register as admin");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await Admin.create({
    name,
    email,
    password: hashedPassword,
    role: "admin",
  });

  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await Admin.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  return user;
};
