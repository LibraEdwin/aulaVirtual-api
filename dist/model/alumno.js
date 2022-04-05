"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const alumno = connection_1.default.define('Alumno', {
    idalumnos: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    aulas_idaulas: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    usuarios_idusuarios: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
}, {
    timestamps: false
});
exports.default = alumno;
//# sourceMappingURL=alumno.js.map