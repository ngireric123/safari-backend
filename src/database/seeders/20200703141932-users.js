'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('Users', [
      {
        userName: 'johndoe',
        email: 'johndoe@test.com',
        firstName: 'john',
        lastName: 'doe',
        password: '$2b$10$vQp2ahUwAnRS.HHxNLK0pOQ/E41TRnxtlDJL.5vVRHsvL7DC9svNm',
        role: 1,
        gender: 'male',
        logoutTime: null,
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ])
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('Users', null, {})
  ])
};