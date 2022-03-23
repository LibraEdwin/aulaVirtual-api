"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let firma = process.env.SECRETORPRIVATEKEY || '';
const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jsonwebtoken_1.default.sign(payload, firma, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                reject('No se pudo generar el token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJWT = generarJWT;
//# sourceMappingURL=generar-JWT.js.map