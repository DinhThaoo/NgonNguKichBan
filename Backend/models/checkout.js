'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Account, DetailCheckout }) {
      // define association here
      this.belongsTo(Account, { foreignKey: 'Account_ID', as: 'Account' });
      this.hasMany(DetailCheckout, { foreignKey: 'Checkout_ID', as: 'Checkout' })
    }
  }
  Checkout.init({
    TotalMoney: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Checkout',
  });
  return Checkout;
};