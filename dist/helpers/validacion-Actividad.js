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
exports.verificacionEvento = exports.verificacionUsuario = void 0;
const model_1 = require("../model");
const verificacionUsuario = (usuario_idusuarios = '') => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield model_1.Usuario.findByPk(usuario_idusuarios);
    if (!usuario) {
        throw new Error(`El id ${usuario_idusuarios} no corresponde a ningun usuario`);
    }
});
exports.verificacionUsuario = verificacionUsuario;
const verificacionEvento = (eventos_ideventos = '') => __awaiter(void 0, void 0, void 0, function* () {
    const evento = yield model_1.Evento.findByPk(eventos_ideventos);
    if (!evento) {
        throw new Error(`El id ${eventos_ideventos} no corresponde a ningun evento`);
    }
});
exports.verificacionEvento = verificacionEvento;
//# sourceMappingURL=validacion-Actividad.js.map