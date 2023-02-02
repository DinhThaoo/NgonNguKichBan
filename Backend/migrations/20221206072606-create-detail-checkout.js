'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailCheckouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Checkout_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Checkouts",
          key: 'id'
        }
      },
      Product_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Products",
          key: 'id'
        }
      },
      Price: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Discount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetailCheckouts');
  }
};