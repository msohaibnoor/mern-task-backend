const express = require('express');
const carController = require('../../controllers/car.controller');
const { protect } = require('../../middlewares/authMiddleware');

const router = express.Router();

router
  .route('/')
  .post(protect, carController.createCar)
  .get(protect, carController.getCars);

router
  .route('/count')
  .get(protect, carController.getCarCount);

router
  .route('/:carId')
  .get(protect, carController.getCar)
  .patch(protect, carController.updateCar)
  .delete(protect,  carController.deleteCar);



module.exports = router;

