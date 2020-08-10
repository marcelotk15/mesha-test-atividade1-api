const { Sequelize, Model } = require("sequelize");

class Attendance extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        annotation: Sequelize.STRING,
        started_at: Sequelize.DATE,
        finished_at: Sequelize.DATE,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Patient, { foreignKey: "patient_id" });

    this.hasMany(models.Procedure, {
      as: "Procedures",
      foreignKey: "attendance_id",
    });
  }
}

module.exports = Attendance;
