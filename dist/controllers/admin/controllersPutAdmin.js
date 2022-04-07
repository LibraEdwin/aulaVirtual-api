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
exports.putAsignarUsuarioAlumno = exports.putUsuarioAlumno = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const model_1 = require("../../model");
const putUsuarioAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let { nombres, apellidos, correo, contraseña, img } = req.body;
    if (contraseña) {
        const salt = bcryptjs_1.default.genSaltSync();
        contraseña = bcryptjs_1.default.hashSync(contraseña, salt);
    }
    try {
        let user;
        user = yield model_1.Usuario.findByPk(id);
        yield user.update({ nombres, apellidos, correo, contraseña, img });
        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizaddo'
        });
    }
    catch (error) {
        {
            error: [
                {
                    value: "putUsuarioAlumno",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllersPutAdmin"
                }
            ];
        }
    }
});
exports.putUsuarioAlumno = putUsuarioAlumno;
const putAsignarUsuarioAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let { aulas_idaulas } = req.body;
    try {
        let user;
        user = yield model_1.Alumno.findByPk(id);
        yield user.update({
            aulas_idaulas
        });
        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizaddo'
        });
    }
    catch (error) {
        {
            error: [
                {
                    value: "putAsignarUsuarioAlumno",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllersPutAdmin"
                }
            ];
        }
    }
});
exports.putAsignarUsuarioAlumno = putAsignarUsuarioAlumno;
//# sourceMappingURL=controllersPutAdmin.js.map