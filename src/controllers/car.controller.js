const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { carService } = require('../services');
const { addCarSchema } = require('../utils/Schema/car');

const createCar = catchAsync(async (req, res) => {
  const carValidation = addCarSchema.validate(req.body)
  if (carValidation.error) {
    throw new ApiError(httpStatus.BAD_REQUEST, carValidation.error.details[0].message);
  }
  const car = await carService.createCar(req.body);
  res.status(httpStatus.CREATED).send(car);
});

const getCars = catchAsync(async (req, res) => {
  const query = req.query
  const result = await carService.queryCars(query);
  res.send(result);
});

const getCarCount = catchAsync(async (req, res) => {
  const result = await carService.getCarCount();
  res.send({
    count: result
  });
});

const getCar = catchAsync(async (req, res) => {
  console.log(req.params)
  const car = await carService.getCarById(req.params.carId);
  if (!car) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Car not found');
  }
  res.send(car);
});

const updateCar = catchAsync(async (req, res) => {
  const car = await carService.updateCarById(req.params.carId, req.body);
  res.send(car);
});

const deleteCar = catchAsync(async (req, res) => {
  await carService.deleteCarById(req.params.carId);
  res.status(httpStatus.OK).send({
    success: true,
    message: 'Car deleted successfully',
  });
});

module.exports = {
  createCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
  getCarCount
};
