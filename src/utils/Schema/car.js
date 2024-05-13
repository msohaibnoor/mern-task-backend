const Joi = require("joi")

const addCarSchema = Joi.object({
  category: Joi.string().required(),
  make: Joi.string().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  registrationNo: Joi.string().required(),
})

module.exports = {
  addCarSchema
}
