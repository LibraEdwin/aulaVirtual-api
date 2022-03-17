"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Actividad = connection_1.default.define('Actividad', {
    idactividads: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    actividad: {
        type: sequelize_1.DataTypes.STRING
    },
    comentario: {
        type: sequelize_1.DataTypes.STRING
    },
    nota: {
        type: sequelize_1.DataTypes.INTEGER
    },
    usuario_idusuarios: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
});
exports.default = Actividad;
//# sourceMappingURL=actividad.js.map