import * as employeeService from "../services/employeeService.js";

export const createEmployee = async (req, res) => {
  try {
    const emp = await employeeService.createEmployee(req.body);

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: emp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const data = await employeeService.getEmployees(req.query);

    res.status(200).json({
      success: true,
      message: "Employees fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const emp = await employeeService.updateEmployee(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      data: emp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await employeeService.deleteEmployee(req.params.id);

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

export const getDeletedEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getDeletedEmployees();

    res.status(200).json({
      success: true,
      message: "Deleted employees fetched",
      data: employees,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

export const restoreEmployee = async (req, res) => {
  try {
    const emp = await employeeService.restoreEmployee(req.params.id);

    res.status(200).json({
      success: true,
      message: "Employee restored successfully",
      data: emp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

export const permanentDeleteEmployee = async (req, res) => {
  try {
    await employeeService.permanentDeleteEmployee(req.params.id);

    res.status(200).json({
      success: true,
      message: "Employee permanently deleted",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};
