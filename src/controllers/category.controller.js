const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { categoryService } = require("../services");
const { addCategorySchema } = require("../utils/Schema/category");

const createCategory = catchAsync(async (req, res) => {
  const categoryValidation = addCategorySchema.validate(req.body);
  if (categoryValidation.error) {
    throw new ApiError(httpStatus.BAD_REQUEST, categoryValidation.error.details[0].message);
  }
  const category = await categoryService.createCategory(req.body);
  res.status(httpStatus.CREATED).send(category);
});

const getCategories = catchAsync(async (req, res) => {
  const result = await categoryService.queryCategories(req.query);
  res.send(result);
});

const getCategory = catchAsync(async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }
  res.send(category);
});

const updateCategory = catchAsync(async (req, res) => {
  const category = await categoryService.updateCategoryById(req.params.categoryId, req.body);
  res.send(category);
});

const deleteCategory = catchAsync(async (req, res) => {
  await categoryService.deleteCategoryById(req.params.categoryId);
  res.status(httpStatus.OK).send({
    success: true,
    message: "Category deleted successfully"
  });
});

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
};
