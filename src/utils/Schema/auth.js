const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().required().email().messages({
    "any.required": `Email is a required field`,
    "string.empty": `Email cannot be empty`,
    "string.email": `Enter a valid email`
  }),
  password: Joi.string().required().min(8).max(30).messages({
    "any.required": `Password is a required field`,
    "string.empty": `Password can not be empty`
  })
});

const signupSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `name is a required field`,
    "string.empty": `name cannot be empty`
  }),
  email: Joi.string().required().email().messages({
    "any.required": `Email is a required field`,
    "string.empty": `Email cannot be empty`,
    "string.email": `Enter a valid email`
  })
});

module.exports = {
  loginSchema,
  signupSchema
};
