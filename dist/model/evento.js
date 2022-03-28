"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Evento = connection_1.default.define('Evento', {
    ideventos: {
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
    archivo: {
        type: sequelize_1.DataTypes.STRING
    },
    inicio: {
        type: sequelize_1.DataTypes.DATE
    },
    final: {
        type: sequelize_1.DataTypes.DATE
    },
    usuario_idusuarios: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    clases_idclases: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    timestamps: false
});
exports.default = Evento;
//# sourceMappingURL=evento.js.map