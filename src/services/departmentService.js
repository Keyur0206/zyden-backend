import Department from "../models/Department.js";

// Create
export const createDepartment = async ({ name }) => {
  const existing = await Department.findOne({
    name: new RegExp(`^${name}$`, "i"),
  });

  if (existing) {
    throw new Error("Department already exists");
  }

  return await Department.create({ name });
};

// Get All
export const getDepartments = async () => {
  return await Department.find();
};

// Update
export const updateDepartment = async (id, { name }) => {
  const department = await Department.findByIdAndUpdate(id, { name }, { new: true });

  if (!department) {
    throw new Error("Department not found");
  }

  return department;
};

export const deleteDepartment = async (id) => {
  const department = await Department.findByIdAndDelete(id);

  if (!department) {
    throw new Error("Department not found");
  }

  return department;
};
