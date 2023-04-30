const { v4: uuidv4 } = require("uuid");

("use strict");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("MenuOrders", {
            menu_order_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: uuidv4(),
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            menu_id: {
                type: Sequelize.UUID,
                defaultValue: uuidv4(),
                onDelete: "CASCADE",
                references: {
                    model: "Menu",
                    key: "menu_id",
                    as: "menu_id",
                },
            },
            order_id: {
                type: Sequelize.UUID,
                defaultValue: uuidv4(),
                onDelete: "CASCADE",
                references: {
                    model: "Order",
                    key: "order_id",
                    as: "order_id",
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
        await queryInterface.dropTable("MenuOrders");
    },
};
