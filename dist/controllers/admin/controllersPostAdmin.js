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
exports.postUsuarioAlumno = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const model_1 = require("../../model");
const postUsuarioAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { nombres, apellidos, correo, contraseña, img } = req.body;
    const rol = 'ALUMNO';
    const salt = bcryptjs_1.default.genSaltSync();
    contraseña = bcryptjs_1.default.hashSync(contraseña, salt);
    try {
        const usuario = yield model_1.Usuario.create({ nombres, apellidos, correo, contraseña, img, rol });
        yield usuario.save();
        const user = yield model_1.Usuario.findOne({
            where: {
                nombres,
                apellidos
            }
        });
        const idusuarios = parseInt(user.idusuarios);
        yield model_1.Alumno.create({ usuarios_idusuarios: idusuarios });
        res.status(201).json({
            msg: 'Alumno registrado'
        });
    }
    catch (error) {
        return res.status(401).json({
            error: [
                {
                    value: "postUsuarioAlumno",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllersPostAdmin"
                }
            ]
        });
    }
});
exports.postUsuarioAlumno = postUsuarioAlumno;
//# sourceMappingURL=controllersPostAdmin.js.map