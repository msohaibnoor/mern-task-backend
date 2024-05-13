const Joi = require("joi");

const addCategorySchema = Joi.object({
  name: Joi.string().required()
});

module.exports = {
  addCategorySchema
};
