const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router
  .route('/')
  .post( categoryController.createCategory)
  .get(categoryController.getCategories);

router
  .route('/:categoryId')
  .get( categoryController.getCategory)
  .patch(categoryController.updateCategory)
  .delete( categoryController.deleteCategory);

module.exports = router;

