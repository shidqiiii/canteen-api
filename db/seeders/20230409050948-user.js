const bcrypt = require("bcrypt");

("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("user", [
            {
                name: "admin",
                password: bcrypt.hashSync("test1234", 10),
                email: "admin1@admin.com",
                role: "admin",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("user", null, {});
    },
};
