"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.belongsTo(models.User, {
                foreignKey: "user_id",
            });
            Order.hasMany(models.MenuOrder, {
                foreignKey: "menu_order_id",
            });
        }
    }
    Order.init(
        {
            order_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: () => uuidv4(),
            },
            total_price: DataTypes.INTEGER,
            status_order: DataTypes.INTEGER,
            user_id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                references: {
                    model: "Canteen",
                    key: "user_id",
                },
            },
        },
        {
            sequelize,
            modelName: "Order",
            freezeTableName: true,
            paranoid: true,
        }
    );
    return Order;
};
