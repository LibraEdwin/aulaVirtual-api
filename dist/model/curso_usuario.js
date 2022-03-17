"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Curso_usuario = connection_1.default.define('Curso_usuario', {
    usuario_idusuarios: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },
    cursos_idcursos: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false
});
exports.default = Curso_usuario;
//# sourceMappingURL=curso_usuario.js.map