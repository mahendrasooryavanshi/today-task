"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "category_name",
      },
      productName: {
        type: DataTypes.STRING,
        field: "product_name",
        allowNull: false,
      },
      productBarcode: {
        type: DataTypes.STRING,
        field: "product_barcode",
        allowNull: false,
      },
      productSku: {
        type: DataTypes.STRING,
        field: "product_sku",
        allowNull: false,
      },
      productColor: {
        type: DataTypes.STRING,
        field: "product_color",
        allowNull: false,
      },
      productSize: {
        type: DataTypes.ENUM("M", "L", "XL", "XXL", "S", "XXXL"),
        field: "product_size",
        allowNull: false,
      },
      productPrice: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "product_price",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: "deleted_at",
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
