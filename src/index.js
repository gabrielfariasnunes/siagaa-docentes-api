const express = require("express");
const routes = require("#server/routes");
const { port } = require("#helpers/env");

const server = express();

module.exports = {
  createServer() {
    server.use(routes);
    server.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  },
};
