'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailCheckout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Checkout, Product }) {
      // define association here
      this.belongsTo(Checkout, { foreignKey: 'Checkout_ID', as: 'Checkout' });
      this.belongsTo(Product, { foreignKey: 'Product_ID', as: 'Product' });
    }
  }
  DetailCheckout.init({
    Price: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    Discount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailCheckout',
  });
  return DetailCheckout;
};