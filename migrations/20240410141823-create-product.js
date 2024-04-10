"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "category_name",
      },
      productName: {
        type: Sequelize.STRING,
        field: "product_name",
        allowNull: false,
      },
      productBarcode: {
        type: Sequelize.STRING,
        field: "product_barcode",
        allowNull: false,
      },
      productSku: {
        type: Sequelize.STRING,
        field: "product_sku",
        allowNull: false,
      },
      productColor: {
        type: Sequelize.STRING,
        field: "product_color",
        allowNull: false,
      },
      productSize: {
        type: Sequelize.ENUM("M", "L", "XL", "XXL", "S", "XXXL"),
        field: "product_size",
        allowNull: false,
        defaultValue: "S",
      },
      productPrice: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "product_price",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "deleted_at",
        defaultValue: null,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
