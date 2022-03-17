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
exports.deleteClase = exports.putClase = exports.postClase = exports.getClaseID = exports.getClase = void 0;
const model_1 = require("../model");
const getClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clase = yield model_1.Clase.findAll({
        include: [model_1.Curso, model_1.Aula]
    });
    res.status(200).json(clase);
});
exports.getClase = getClase;
const getClaseID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const clase = yield model_1.Clase.findByPk(id);
    res.status(200).json(clase);
});
exports.getClaseID = getClaseID;
const postClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const clase = yield model_1.Clase.create(body);
        yield clase.save();
        res.status(201).json({
            ok: true,
            msg: 'Usuario registrado'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.postClase = postClase;
const putClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const clase = yield model_1.Clase.findByPk(id);
        if (!clase) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            });
        }
        yield clase.update(body);
        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizaddo'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.putClase = putClase;
const deleteClase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const clase = yield model_1.Clase.findByPk(id);
    if (!clase) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        });
    }
    yield clase.update({ estado: false });
    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    });
});
exports.deleteClase = deleteClase;
//# sourceMappingURL=clase.js.map