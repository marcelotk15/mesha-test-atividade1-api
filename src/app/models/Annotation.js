const { Sequelize, Model } = require("sequelize");

class Annotation extends Model {
  static init(sequelize) {
    super.init(
      {
        started_at: Sequelize.DATE,
        finished_at: Sequelize.DATE,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Patient, { foreignKey: "patient_id" });

    this.belongsToMany(models.Procedure, {
      foreignKey: "attendance_id",
      through: "attendances_procedures",
    });
  }
}

module.exports = Annotation;
