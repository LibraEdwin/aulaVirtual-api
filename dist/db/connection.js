"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let Database;
Database = process.env.PORTDATABASE;
let Username;
Username = process.env.USER;
let Password;
Password = process.env.PASSWORD;
let host;
host = process.env.HOST;
let dialect;
dialect = process.env.DIALECT;
const db = new sequelize_1.Sequelize(Database, Username, Password, {
    host,
    dialect,
    //logging: false
});
exports.default = db;
//# sourceMappingURL=connection.js.map