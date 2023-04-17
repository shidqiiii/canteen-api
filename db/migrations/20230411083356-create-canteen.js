const { v4: uuidv4 } = require("uuid");

("use strict");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("canteen", {
            canteen_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: uuidv4(),
            },
            name: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            photo: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("canteen");
    },
};
