"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            user_id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: () => uuidv4(),
            },
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            role: DataTypes.ENUM("admin", "staff", "student"),
        },
        {
            sequelize,
            modelName: "User",
            freezeTableName: true,
        }
    );
    return User;
};
