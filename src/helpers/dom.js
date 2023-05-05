const { parse } = require("node-html-parser");

module.exports = {
  parser: function (html) {
    return parse(html);
  },
};
