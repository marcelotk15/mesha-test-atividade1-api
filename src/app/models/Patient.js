const { Sequelize, Model } = require("sequelize");

class Patient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        birthday: Sequelize.DATE,
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
    this.belongsTo(models.Avatar, { foreignKey: "avatar_id" });
  }
}

module.exports = Patient;
