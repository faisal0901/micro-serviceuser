"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "faisal",
        profesion: "admin",
        role: "admin",
        email: "muhammadfaisal0901@gmail.com",
        password: await bcrypt.hash("faisal0901", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "ncus",
        profesion: "front end",
        role: "student",
        email: "ncus1@gmail.com",
        password: await bcrypt.hash("rahasia", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
