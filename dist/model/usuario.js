"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    idusuario: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    contraseña: {
        type: sequelize_1.DataTypes.STRING
    },
    img: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    rol: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map