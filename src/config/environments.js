const dotenvExpand = require("dotenv-expand");

const dotenv = require("dotenv").config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env"
      : `.env.${process.env.NODE_ENV}`,
});

dotenvExpand(dotenv);

const config = process.env;

module.exports = config;
