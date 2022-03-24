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
exports.validarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const model_1 = require("../model");
let FirmaToken;
FirmaToken = process.env.FIRMATOKENKEY;
const validarJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            error: [
                {
                    value: "generador de token",
                    msg: "No hay un token en la peticion",
                    param: "token",
                    location: "validarJWT"
                }
            ]
        });
    }
    try {
        let payload;
        payload = jsonwebtoken_1.default.verify(token, FirmaToken);
        let usuario;
        usuario = yield model_1.Usuario.findByPk(payload.id);
        if (!usuario) {
            return res.status(401).json({
                error: [
                    {
                        value: "generador de token",
                        msg: "Token no valido - usuario no existe",
                        param: "token",
                        location: "validarJWT"
                    }
                ]
            });
        }
        if (!usuario.estado) {
            return res.status(401).json({
                error: [
                    {
                        value: "generador de token",
                        msg: "Token no valido - esdado de usuario en falso",
                        param: "token",
                        location: "validarJWT"
                    }
                ]
            });
        }
        req.usuario = usuario;
        next();
    }
    catch (error) {
        res.status(401).json({
            error: [
                {
                    value: "generador de token",
                    msg: "hablar con el administrador",
                    param: "token",
                    location: "validarJWT"
                }
            ]
        });
    }
});
exports.validarJWT = validarJWT;
//# sourceMappingURL=validar-JWT.js.map