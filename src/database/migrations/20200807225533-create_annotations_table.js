module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("annotations", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      annotation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      attendance_id: {
        type: Sequelize.INTEGER,
        references: { model: "attendances", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("annotations");
  },
};
