const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtSecret: process.env.SECRET_KEY,
  jwtExpiration: "24h",
  jwtRefreshExpiration: 120,
};
