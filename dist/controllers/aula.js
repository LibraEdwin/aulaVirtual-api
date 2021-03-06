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
exports.deleteAula = exports.putAula = exports.postAula = exports.getAulaID = exports.getAula = void 0;
const model_1 = require("../model");
const getAula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aula = yield model_1.Aula.findAll({
        group: 'grado'
    });
    res.status(200).json(aula);
});
exports.getAula = getAula;
const getAulaID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const aula = yield model_1.Aula.findByPk(id);
    res.status(200).json(aula);
});
exports.getAulaID = getAulaID;
const postAula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const aula = yield model_1.Aula.create(body);
        yield aula.save();
        res.status(201).json({
            ok: true,
            msg: 'Usuario registrado'
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.postAula = postAula;
const putAula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const aula = yield model_1.Aula.findByPk(id);
        if (!aula) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            });
        }
        yield aula.update(body);
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
exports.putAula = putAula;
const deleteAula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const aula = yield model_1.Aula.findByPk(id);
    if (!aula) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        });
    }
    yield aula.update({ estado: false });
    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    });
});
exports.deleteAula = deleteAula;
//# sourceMappingURL=aula.js.map