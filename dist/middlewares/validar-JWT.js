"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let FirmaToken;
FirmaToken = process.env.FIRMATOKENKEY;
const validarJWT = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay un token en la peticion'
        });
    }
    try {
        jsonwebtoken_1.default.verify(token, FirmaToken);
        next();
    }
    catch (error) {
        res.status(401).json({
            msg: 'Token no valido'
        });
    }
};
exports.validarJWT = validarJWT;
//# sourceMappingURL=validar-JWT.js.map