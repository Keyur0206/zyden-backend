import Joi from "joi";

export const createEmployeeSchema = Joi.object({
  name: Joi.string().min(3).required(),

  email: Joi.string().email().required(),

  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone must be exactly 10 digits",
    }),

  department: Joi.string().hex().length(24).required(),

  designation: Joi.string().required(),

  salary: Joi.number().greater(0).required(),

  joiningDate: Joi.date().max("now").required(),
});

export const updateEmployeeSchema = Joi.object({
  name: Joi.string().min(3),

  email: Joi.string().email(),

  phone: Joi.string().pattern(/^[0-9]{10}$/),

  department: Joi.string().hex().length(24),

  designation: Joi.string(),

  salary: Joi.number().greater(0),

  joiningDate: Joi.date().max("now"),
});
