require("dotenv").config();

module.exports = {
  port: process.env.PORT || 9090,
  session: process.env.SESSION,
};
