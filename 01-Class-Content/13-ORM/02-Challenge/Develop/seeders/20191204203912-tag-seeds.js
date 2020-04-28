'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Tag', [
    {
     tag_name: 'rock'
    },
    {
     tag_name: 'pop'
    },
    {
     tag_name: 'zelda'
    },
    {
     tag_name: 'nintendo'
    },
    {
     tag_name: 'honda'
    },
    {
     tag_name: 'blue'
    },
    {
     tag_name: 'red'
    },
    {
     tag_name: 'green'
    },
    {
     tag_name: 'xbox'
    }
  ]);
  }
};
