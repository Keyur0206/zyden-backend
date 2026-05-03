import Department from "../models/Department.js";
import Employee from "../models/Employee.js";

export const createEmployee = async (data) => {
  const { email, department } = data;

  const exists = await Employee.findOne({ email });
  if (exists) throw new Error("Email already exists");

  const dept = await Department.findById(department);
  if (!dept) throw new Error("Invalid department");

  return await Employee.create(data);
};

export const getEmployees = async (query) => {
  const { search, department, minSalary, maxSalary, status, sort, page = 1, limit = 10 } = query;

  let filter = {};

  if (status === "inactive") filter.isDeleted = true;
  else filter.isDeleted = false;

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];
  }

  if (department) filter.department = department;

  if (minSalary || maxSalary) {
    filter.salary = {};
    if (minSalary) filter.salary.$gte = Number(minSalary);
    if (maxSalary) filter.salary.$lte = Number(maxSalary);
  }

  let sortOption = {};
  if (sort === "salary_desc") sortOption.salary = -1;
  if (sort === "salary_asc") sortOption.salary = 1;
  if (sort === "date_desc") sortOption.joiningDate = -1;

  const skip = (page - 1) * limit;

  const employees = await Employee.find(filter)
    .populate("department", "name")
    .sort(sortOption)
    .skip(skip)
    .limit(Number(limit));

  const total = await Employee.countDocuments(filter);

  return {
    total,
    page: Number(page),
    limit: Number(limit),
    employees,
  };
};

export const updateEmployee = async (id, data) => {
  const emp = await Employee.findByIdAndUpdate(id, data, { new: true });

  if (!emp) throw new Error("Employee not found");

  return emp;
};

export const deleteEmployee = async (id) => {
  const emp = await Employee.findByIdAndUpdate(id, { isDeleted: true }, { new: true });

  if (!emp) throw new Error("Employee not found");

  return emp;
};

export const getDeletedEmployees = async () => {
  return await Employee.find({ isDeleted: true }).populate("department", "name");
};

export const restoreEmployee = async (id) => {
  const emp = await Employee.findByIdAndUpdate(id, { isDeleted: false }, { new: true });

  if (!emp) throw new Error("Employee not found");

  return emp;
};

export const permanentDeleteEmployee = async (id) => {
  const emp = await Employee.findByIdAndDelete(id);

  if (!emp) throw new Error("Employee not found");

  return emp;
};
