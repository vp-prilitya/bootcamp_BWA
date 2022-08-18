const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtSecret: process.env.SECRET_KEY,
  jwtExpiration: "24h",
  jwtRefreshTokenExpiration: "24h",
  jwtRefreshTokenSecret: process.env.SECRET_KEY_REFRESH,
  gmail: process.env.EMAIL,
  password: process.env.PASSWORD_EMAIL,
};
