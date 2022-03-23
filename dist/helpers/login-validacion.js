"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estadoFalse = exports.correoIncorrecto = void 0;
const model_1 = require("../model");
const correoIncorrecto = (correo = '') => __awaiter(void 0, void 0, void 0, function* () {
    let usuario;
    usuario = yield model_1.Usuario.findOne({ where: { correo } });
    if (!usuario) {
        throw new Error(`Usuario o contraseña son incorrectos - correo`);
    }
});
exports.correoIncorrecto = correoIncorrecto;
const estadoFalse = (correo = '') => __awaiter(void 0, void 0, void 0, function* () {
    let usuario;
    usuario = yield model_1.Usuario.findOne({ where: { correo } });
    if (!usuario.estado) {
        throw new Error('Usuario o contraseña son incorrectos - estado');
    }
});
exports.estadoFalse = estadoFalse;
//# sourceMappingURL=login-validacion.js.map