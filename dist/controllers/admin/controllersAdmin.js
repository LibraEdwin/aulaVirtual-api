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
exports.getAlumnoAula = void 0;
const model_1 = require("../../model");
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('es');
const getAlumnoAula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { grado, seccion } = req.query;
    try {
        const aula_usuario = yield model_1.Aula_usuario.findAll({
            include: [
                {
                    model: model_1.Usuario
                }, {
                    model: model_1.Aula,
                    where: {
                        grado,
                        seccion
                    }
                }
            ]
        });
        res.status(200).json(aula_usuario);
    }
    catch (error) {
        return res.status(401).json({
            error: [
                {
                    value: "getAlumnoAula",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllers.Docente"
                }
            ]
        });
    }
});
exports.getAlumnoAula = getAlumnoAula;
//# sourceMappingURL=controllersAdmin.js.map