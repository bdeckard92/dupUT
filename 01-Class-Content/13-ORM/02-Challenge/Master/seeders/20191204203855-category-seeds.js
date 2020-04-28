'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Categories', [
    {
      category_name: 'Shirts'
    },
    {
      category_name: 'Shorts'
    },
    {
      category_name: 'Music'
    },
    {
      category_name: 'Hats'
    },
    {
      category_name: 'Shoes'
    }
  ]);
  }
};
