"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
    class MenuOrder extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            MenuOrder.belongsTo(models.Order, {
                foreignKey: "order_id",
            });
            MenuOrder.belongsTo(models.Menu, {
                foreignKey: "menu_id",
            });
        }
    }
    MenuOrder.init(
        {
            menu_order_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: () => uuidv4(),
            },
            quantity: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
            menu_id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                references: {
                    model: "Menu",
                    key: "menu_id",
                },
            },
            order_id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                references: {
                    model: "Order",
                    key: "order_id",
                },
            },
        },
        {
            sequelize,
            modelName: "MenuOrder",
            freezeTableName: true,
            paranoid: true,
        }
    );
    return MenuOrder;
};
