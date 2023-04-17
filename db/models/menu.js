"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
    class Menu extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Menu.belongsTo(models.Canteen, {
                foreignKey: "canteen_id",
                onDelete: "CASCADE",
            });
        }
    }
    Menu.init(
        {
            menu_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: () => uuidv4(),
            },
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.FLOAT,
            rate: DataTypes.FLOAT,
            photo: DataTypes.STRING,
            canteen_id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                onDelete: "CASCADE",
                references: {
                    model: "Canteen",
                    key: "canteen_id",
                },
            },
        },
        {
            sequelize,
            modelName: "Menu",
            freezeTableName: true,
            paranoid: true,
        }
    );
    return Menu;
};
