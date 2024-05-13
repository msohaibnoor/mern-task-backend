const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");
const catchAsync = require("../utils/catchAsync.js");

// User must be authenticated
const protect = catchAsync(async (req, res, next) => {
  let token;

  token = req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = {
  protect
};
