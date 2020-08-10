const Sequelize = require("sequelize");

const dbConfig = require("../config/database");

const Avatar = require("../app/models/Avatar");
const Patient = require("../app/models/Patient");
const Procedure = require("../app/models/Procedure");
const Attendance = require("../app/models/Attendance");

const models = [Avatar, Patient, Procedure, Attendance];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
