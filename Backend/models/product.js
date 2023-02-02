'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, DetailCheckout }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'Category_ID', as: 'Category' });
      this.hasMany(DetailCheckout, { foreignKey: 'Product_ID', as: 'Product' });
    }
  }
  Product.init({
    ProductName: DataTypes.STRING,
    ProductImage: DataTypes.STRING,
    Description: DataTypes.STRING,
    Price: DataTypes.STRING,
    Discount: DataTypes.INTEGER,
    IsActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};