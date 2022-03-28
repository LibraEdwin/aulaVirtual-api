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
exports.getEventosAlumno = void 0;
const model_1 = require("../../model");
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('es');
const getEventosAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const evento = yield model_1.Evento.findAll({
            attributes: [
                'actividad', 'comentario', 'archivo', 'inicio', 'final'
            ],
            where: {
                usuario_idusuarios: id
            },
            include: [
                {
                    model: model_1.Usuario,
                    attributes: [
                        'nombres', 'apellidos'
                    ]
                },
                {
                    model: model_1.Clase,
                    attributes: [
                        'tema'
                    ],
                    include: [
                        {
                            model: model_1.Aula,
                            attributes: [
                                'grado', 'seccion'
                            ]
                        },
                        {
                            model: model_1.Curso,
                            attributes: [
                                'curso'
                            ]
                        }
                    ]
                },
            ]
        });
        res.status(200).json(evento);
    }
    catch (error) {
        return res.status(401).json({
            error: [
                {
                    value: "getEventosAlumno",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "eventoAlumno"
                }
            ]
        });
    }
});
exports.getEventosAlumno = getEventosAlumno;
//# sourceMappingURL=eventoAlumno.js.map