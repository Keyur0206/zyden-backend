import Department from "../models/Department.js";
import Employee from "../models/Employee.js";

export const createDepartment = async ({ name }) => {
  const existing = await Department.findOne({
    name: new RegExp(`^${name}$`, "i"),
  });

  if (existing) {
    throw new Error("Department already exists");
  }

  return await Department.create({ name });
};

export const getDepartments = async () => {
  return await Department.find();
};

export const updateDepartment = async (id, { name }) => {
  const department = await Department.findByIdAndUpdate(id, { name }, { new: true });

  if (!department) {
    throw new Error("Department not found");
  }

  return department;
};

export const deleteDepartment = async (id) => {
  const employeeExists = await Employee.exists({ department: id });

  if (employeeExists) {
    throw new Error("Department is assigned to employees. Reassign them before deleting.");
  }

  const department = await Department.findByIdAndDelete(id);

  if (!department) {
    throw new Error("Department not found");
  }

  return department;
};
