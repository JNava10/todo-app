'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        const hashedPassword = await bcrypt.hash('daw', parseInt(process.env.HASH_SALT));

        await queryInterface.bulkInsert('users', [{
            nickName: 'Nava',
            email: 'juannr2002@gmail.com',
            password: hashedPassword,
        }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
