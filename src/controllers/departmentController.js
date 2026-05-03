import * as departmentService from "../services/departmentService.js";

export const createDepartment = async (req, res) => {
  try {
    const department = await departmentService.createDepartment(req.body);

    res.status(201).json({
      success: true,
      message: "Department created successfully",
      data: department,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

export const getDepartments = async (req, res) => {
  try {
    const departments = await departmentService.getDepartments();

    res.status(200).json({
      success: true,
      message: "Departments fetched successfully",
      data: departments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

export const updateDepartment = async (req, res) => {
  try {
    const department = await departmentService.updateDepartment(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Department updated successfully",
      data: department,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

export const deleteDepartment = async (req, res) => {
  try {
    await departmentService.deleteDepartment(req.params.id);

    res.status(200).json({
      success: true,
      message: "Department deleted successfully",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
