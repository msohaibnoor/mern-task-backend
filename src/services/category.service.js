const httpStatus = require("http-status");
const { Category } = require("../models");
const ApiError = require("../utils/ApiError");

const createCategory = async (categoryBody) => {
  let categoryExists = await Category.findOne({
    name: categoryBody.name
  });
  if (categoryExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Category already exists");
  }
  return Category.create(categoryBody);
};

const queryCategories = async (query) => {
  const { page, limit } = query;
  const pageNumber = Number(page) || 1;
  const pageSize = Number(limit) || 5; // Default page size is 5, if not specified

  try {
    const categories = await Category.find({})
      .skip((pageNumber - 1) * pageSize) // Skip records based on the page number
      .limit(pageSize); // Limit the number of records per page

    const totalCategories = await Category.countDocuments(); // Get the total number of categories

    const pageCount = Math.ceil(totalCategories / pageSize); // Calculate the total number of pages

    return { categories, pageCount };
  } catch (error) {
    throw new ApiError("Error querying categories: " + error.message);
  }
};

const getCategoryById = async (id) => {
  return Category.findById(id);
};

const updateCategoryById = async (categoryId, updateBody) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }
  Object.assign(category, updateBody);
  await category.save();
  return category;
};

const deleteCategoryById = async (carId) => {
  const category = await getCategoryById(carId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }
  await Category.findByIdAndDelete(carId); // car.remove();
  return;
};

module.exports = {
  createCategory,
  queryCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById
};
