const { v4: uuidv4 } = require("uuid");

("use strict");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("menu", {
            menu_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: uuidv4(),
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.FLOAT,
            },
            rate: {
                type: Sequelize.FLOAT,
            },
            photo: {
                type: Sequelize.STRING,
            },
            canteen_id: {
                type: Sequelize.UUID,
                defaultValue: uuidv4(),
                onDelete: "CASCADE",
                references: {
                    model: "Canteen",
                    key: "canteen_id",
                    as: "canteen_id",
                },
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
        await queryInterface.dropTable("menu");
    },
};
