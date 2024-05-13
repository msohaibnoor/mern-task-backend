const httpStatus = require("http-status");
const { Car } = require("../models");
const ApiError = require("../utils/ApiError");

const createCar = async (carBody) => {
  return Car.create(carBody);
};

const queryCars = async (query) => {
  const { page, limit } = query;
  const pageNumber = Number(page) || 1;
  const pageSize = Number(limit) || 5; // Default page size is 5, if not specified

  try {
    const cars = await Car.find({})
      .skip((pageNumber - 1) * pageSize) // Skip records based on the page number
      .limit(pageSize); // Limit the number of records per page

    const totalCars = await Car.countDocuments(); // Get the total number of cars

    const pageCount = Math.ceil(totalCars / pageSize); // Calculate the total number of pages

    return { cars, pageCount };
  } catch (error) {
    throw new ApiError("Error querying cars: " + error.message);
  }
};

const getCarCount = async () => {
  const count = await Car.countDocuments({});
  return count;
};

const getCarById = async (id) => {
  return Car.findById(id);
};

const updateCarById = async (carId, updateBody) => {
  const car = await getCarById(carId);
  if (!car) {
    throw new ApiError(httpStatus.NOT_FOUND, "Car not found");
  }
  Object.assign(car, updateBody);
  await car.save();
  return car;
};

const deleteCarById = async (carId) => {
  const car = await getCarById(carId);
  console.log({ car });
  if (!car) {
    throw new ApiError(httpStatus.NOT_FOUND, "Car not found");
  }
  await Car.findByIdAndDelete(carId); // car.remove();
  return car;
};

module.exports = {
  createCar,
  queryCars,
  getCarById,
  updateCarById,
  deleteCarById,
  getCarCount
};
