const { Sequelize, Model } = require("sequelize");

class Patient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        birth: Sequelize.DATE,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: "avatar_id" });
  }
}

module.exports = Patient;
