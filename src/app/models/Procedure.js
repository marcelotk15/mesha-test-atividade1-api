const { Sequelize, Model } = require("sequelize");

class Procedure extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.DECIMAL(10, 2),
        duration: Sequelize.INTEGER,
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
