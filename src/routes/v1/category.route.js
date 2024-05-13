const express = require('express');
const categoryController = require('../../controllers/category.controller');
const { protect } = require('../../middlewares/authMiddleware');

const router = express.Router();


router
  .route('/')
  .post(protect, categoryController.createCategory)
  .get(protect, categoryController.getCategories);

router
  .route('/:categoryId')
  .get(protect, categoryController.getCategory)
  .patch(protect, categoryController.updateCategory)
  .delete(protect,  categoryController.deleteCategory);

module.exports = router;

