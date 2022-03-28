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
exports.postActividadAlumno = void 0;
const model_1 = require("../../model");
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('es');
const postActividadAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { comentario, archivo, apellidos, nombres, actividad, inicio, final } = req.body;
    const usuario = yield model_1.Usuario.findOne({
        where: {
            nombres,
            apellidos
        }
    });
    if (!usuario) {
        return res.status(400).json({
            error: [
                {
                    value: "apellidos, nombres",
                    msg: "Docente no encontrado",
                    param: "usuario",
                    location: "body"
                }
            ]
        });
    }
    const usuario_idusuarios = usuario.idusuarios;
    const evento = yield model_1.Evento.findOne({
        where: {
            actividad, inicio: (0, moment_1.default)(inicio), final: (0, moment_1.default)(final)
        }
    });
    if (!evento) {
        return res.status(400).json({
            error: [
                {
                    value: "actividad, inicio, final",
                    msg: "Evento no encontrado",
                    param: "evento",
                    location: "body"
                }
            ]
        });
    }
    const eventos_ideventos = evento.ideventos;
    try {
        const actividad = yield model_1.Actividad.create({ comentario, archivo, usuario_idusuarios, eventos_ideventos });
        yield actividad.save();
        res.status(201).json({
            ok: true,
            msg: 'Actividad registrado'
        });
    }
    catch (error) {
        return res.status(401).json({
            error: [
                {
                    value: "postActividadAlumno",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "actividadAlumno"
                }
            ]
        });
    }
});
exports.postActividadAlumno = postActividadAlumno;
//# sourceMappingURL=actividadAlumno.js.map