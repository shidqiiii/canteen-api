require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME, DB_HOST, DB_DIALECT } = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE_NAME,
        host: DB_HOST,
        dialect: DB_DIALECT,
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};
