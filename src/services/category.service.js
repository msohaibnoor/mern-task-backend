const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');


const createCategory = async (categoryBody) => {
  return Category.create(categoryBody);
};


const queryCategories = async (filter, options) => {
  const categories = await Category.find({});
  return categories;
};


const getCategoryById = async (id) => {
  return Category.findById(id);
};




const updateCategoryById = async (categoryId, updateBody) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
};


const deleteCategoryById = async (carId) => {
  const category = await getCategoryById(carId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  await Category.findByIdAndDelete(carId); // car.remove();
  return;
};

module.exports = {
  createCategory,
  queryCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
