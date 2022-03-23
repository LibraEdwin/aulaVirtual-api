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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const model_1 = require("../model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, contraseña } = req.body;
    try {
        let usuario;
        usuario = yield model_1.Usuario.findOne({ where: { correo } });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña son incorrectos - correo'
            });
        }
        if (!usuario.estado) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña son incorrectos - estado'
            });
        }
        const validContraseña = bcryptjs_1.default.compareSync(contraseña, usuario.contraseña);
        if (!validContraseña) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña son incorrectos - contraseña'
            });
        }
        res.status(500).json({
            ok: true,
            msg: 'Login ok'
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map