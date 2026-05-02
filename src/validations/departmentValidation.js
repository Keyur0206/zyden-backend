import Joi from "joi";

export const createDepartmentSchema = Joi.object({
  name: Joi.string().min(2).trim().required().messages({
    "string.empty": "Department name is required",
    "string.min": "Department name must be at least 2 characters",
  }),
});

export const updateDepartmentSchema = Joi.object({
  name: Joi.string().min(2).trim(),
});
