const { Model, Sequelize } = require("sequelize");

const { SERVER_URL } = require("../../config/environments");

class Avatar extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${SERVER_URL}/avatars/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Avatar;
