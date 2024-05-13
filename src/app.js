const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");
const cors = require("cors");
const routes = require("./routes/v1");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();
// Set security HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: false, // Disabling default CSP since we'll set our own
    hsts: {
      maxAge: 31536000, // 1 year in seconds
      includeSubDomains: true,
      preload: true
    },
    referrerPolicy: { policy: "same-origin" },
    frameguard: { action: "deny" },
    dnsPrefetchControl: { allow: false },
    ieNoOpen: true,
    noSniff: true,
    hidePoweredBy: true
  })
);

// Set Content Security Policy (CSP)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"],
      styleSrc: ["'self'", "cdn.example.com"],
      imgSrc: ["data:", "cdn.example.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    }
  })
);

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/v1", routes);

// handle errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;
