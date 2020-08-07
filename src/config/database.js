const {
  DB_DIALECT,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = require("./environments");

module.exports = {
  dialect: DB_DIALECT,
  host: DB_HOST,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
