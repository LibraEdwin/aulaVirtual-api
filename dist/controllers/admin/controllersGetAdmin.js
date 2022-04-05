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
exports.getAlumnos = exports.getUsuariosAlumno = exports.getAula = void 0;
const model_1 = require("../../model");
const getAula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aula = yield model_1.Aula.findAll({ order: ['grado'] });
        res.status(200).json(aula);
    }
    catch (error) {
        return res.status(401).json({
            error: [
                {
                    value: "getGradoAula",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllersGetAdmin"
                }
            ]
        });
    }
});
exports.getAula = getAula;
const getUsuariosAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alumno = yield model_1.Alumno.findAll({
            include: [{
                    model: model_1.Usuario,
                    attributes: ['idusuarios', 'nombres', 'apellidos', 'correo', 'contraseña', 'img']
                }],
            where: {
                aulas_idaulas: null
            }
        });
        res.status(200).json(alumno);
    }
    catch (error) {
        return res.status(401).json({
            error: [
                {
                    value: "getUsuarios",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllersGetAdmin"
                }
            ]
        });
    }
});
exports.getUsuariosAlumno = getUsuariosAlumno;
const getAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const alumno = yield model_1.Alumno.findAll({
            include: [{
                    model: model_1.Usuario,
                    attributes: ['nombres', 'apellidos', 'correo', 'img']
                }]
        });
        res.status(200).json(alumno);
    }
    catch (error) {
        return res.status(401).json({
            error: [
                {
                    value: "getAlumnos",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllersGetAdmin"
                }
            ]
        });
    }
});
exports.getAlumnos = getAlumnos;
//# sourceMappingURL=controllersGetAdmin.js.map