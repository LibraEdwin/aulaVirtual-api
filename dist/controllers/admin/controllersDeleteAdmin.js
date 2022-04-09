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
exports.deleteUsuarioAlumnoDesactivado = void 0;
const model_1 = require("../../model");
const deleteUsuarioAlumnoDesactivado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const { usuarios_idusuarios } = yield model_1.Alumno.findByPk(id);
        yield model_1.Alumno.destroy({
            where: {
                idalumnos: id
            }
        });
        yield model_1.Usuario.destroy({
            where: {
                idusuarios: usuarios_idusuarios
            }
        });
        res.status(201).json({
            msg: 'Alumno eliminado'
        });
    }
    catch (error) {
        res.status(500).json({
            error: [
                {
                    value: "deleteUsuarioAlumnoDesactivado",
                    msg: "hable con el administrador",
                    param: "api",
                    location: "controllersDeleteAdmin"
                }
            ]
        });
    }
});
exports.deleteUsuarioAlumnoDesactivado = deleteUsuarioAlumnoDesactivado;
//# sourceMappingURL=controllersDeleteAdmin.js.map