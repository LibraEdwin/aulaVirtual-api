"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Aula = connection_1.default.define('Aula', {
    idaulas: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    grado: {
        type: sequelize_1.DataTypes.STRING
    },
    seccion: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.default = Aula;
//# sourceMappingURL=aula.js.map