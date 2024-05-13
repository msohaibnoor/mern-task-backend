const express = require("express");
const authRoute = require("./auth.route");
const carRoute = require("./car.route");
const categoryRoute = require("./category.route");
// const userRoute = require('./user.route');
// const docsRoute = require('./docs.route');
// const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute
  },
  {
    path: "/cars",
    route: carRoute
  },
  {
    path: "/categories",
    route: categoryRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
