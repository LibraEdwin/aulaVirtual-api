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
    try {
        const grado = '1°';
        const seccion = 'A';
        const aula_usuario = yield model_1.Aula_usuario.findAll({
            group: 'usuario_idusuarios'
        });
        let numero = 1;
        for (let i = 0; i < aula_usuario.length; i++) {
            const element = aula_usuario[i].aulas_idaulas;
            if (element === 6) {
                numero = numero + i;
            }
        }
        console.log(numero);
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
//# sourceMappingURL=controllers.Admin.js.map