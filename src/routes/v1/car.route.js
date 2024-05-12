const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const carController = require('../../controllers/car.controller');

const router = express.Router();

router
  .route('/')
  .post( carController.createCar)
  .get(carController.getCars);

router
  .route('/count')
  .get(carController.getCarCount);

router
  .route('/:carId')
  .get( carController.getCar)
  .patch(carController.updateCar)
  .delete( carController.deleteCar);



module.exports = router;

