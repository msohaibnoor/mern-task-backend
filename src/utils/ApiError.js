// class ApiError extends Error {
//     constructor(statusCode, message, isOperational = true, stack = '') {
//       super(message);
//       this.statusCode = statusCode;
//       this.isOperational = isOperational;
//       if (stack) {
//         this.stack = stack;
//       } else {
//         Error.captureStackTrace(this, this.constructor);
//       }
//     }
//   }

//   module.exports = ApiError;

class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.message = message;
    this.statusCode = statusCode ?? 500;
  }
}

module.exports = ApiError;
