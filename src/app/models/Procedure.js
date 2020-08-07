const { Sequelize, Model } = require("sequelize");

class Procedure extends Model {
  static init(sequelize) {
    super.init(
      {
        annotation: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Attendance, {
      foreignKey: "attendance_id",
    });
  }
}

module.exports = Procedure;
