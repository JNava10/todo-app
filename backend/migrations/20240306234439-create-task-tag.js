'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaskTags', {
      taskId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tagId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TaskTags');
  }
};