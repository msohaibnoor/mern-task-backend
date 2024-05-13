const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const app = require("./app");
dotenv.config({ path: path.join(__dirname, "../.env") });

let server;
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.port}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close();
  }
});
