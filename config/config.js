require("dotenv").config();

module.exports.dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "casino",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
