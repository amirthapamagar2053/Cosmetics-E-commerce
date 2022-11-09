const { DataTypes } = require("sequelize");

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("products", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_path: {
        type: DataTypes.TEXT,
        defaultValue: "no_image",
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specification: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "categories", key: "id" },
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "brands", key: "id" },
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("products");
  },
};
