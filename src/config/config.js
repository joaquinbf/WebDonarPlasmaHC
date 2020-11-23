require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  dev: process.env.NODE_ENV !== "production",
  dburi: process.env.MONGODB_URI,
};

module.exports = config;
