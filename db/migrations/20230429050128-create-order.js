const { v4: uuidv4 } = require("uuid");

("use strict");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("order", {
            order_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: uuidv4(),
            },
            total_price: {
                type: Sequelize.INTEGER,
            },
            status_order: {
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.UUID,
                defaultValue: uuidv4(),
                onDelete: "CASCADE",
                references: {
                    model: "User",
                    key: "user_id",
                    as: "user_id",
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
        await queryInterface.dropTable("order");
    },
};
