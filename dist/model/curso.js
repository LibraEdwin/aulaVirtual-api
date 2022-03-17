"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Curso = connection_1.default.define('Curso', {
    idcursos: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    curso: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Curso;
//# sourceMappingURL=curso.js.map