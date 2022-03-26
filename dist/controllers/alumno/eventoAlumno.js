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
exports.getEventos = void 0;
const model_1 = require("../../model");
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('es');
const getEventos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        let [evento] = yield model_1.Evento.findAll({
            where: {
                usuario_idusuarios: id
            }
        });
        const usuario = yield model_1.Usuario.findByPk(evento.usuario_idusuarios);
        console.log(usuario);
        const actividad = yield model_1.Actividad.findAll({
            where: {
                usuario_idusuarios: id
            }
        });
        res.status(200).json({ evento,
            usuario });
    }
    catch (error) {
        return res.status(401).json({
            error: [
                {
                    value: "getEventos",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "eventoAlumno"
                }
            ]
        });
    }
});
exports.getEventos = getEventos;
//# sourceMappingURL=eventoAlumno.js.map