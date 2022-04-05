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
exports.getAula_usuario = void 0;
const getAula_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const aula_usuario = await Aula_usuario.findAll({
    //     include: [
    //         {
    //             model: Usuario
    //         },{
    //             model: Aula,
    //             where: {
    //                 grado: '1°',
    //                 seccion: 'A'
    //             }
    //         }
    //     ]
    // })
    // res.status(200).json(
    //     aula_usuario
    // )
});
exports.getAula_usuario = getAula_usuario;
//# sourceMappingURL=MostrarAlumnos.js.map