require("dotenv").config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env"
      : `.env.${process.env.NODE_ENV}`,
});

const config = process.env;

module.exports = config;
