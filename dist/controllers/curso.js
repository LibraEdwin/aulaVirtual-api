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
exports.deleteCurso = exports.putCurso = exports.postCurso = exports.getCursoID = exports.getCurso = void 0;
const model_1 = require("../model");
const getCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const curso = yield model_1.Curso.findAll();
    res.status(200).json(curso);
});
exports.getCurso = getCurso;
const getCursoID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const curso = yield model_1.Curso.findByPk(id);
    res.status(200).json(curso);
});
exports.getCursoID = getCursoID;
const postCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const curso = yield model_1.Curso.create(body);
        yield curso.save();
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
exports.postCurso = postCurso;
const putCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const curso = yield model_1.Curso.findByPk(id);
        if (!curso) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            });
        }
        yield curso.update(body);
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
exports.putCurso = putCurso;
const deleteCurso = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const curso = yield model_1.Curso.findByPk(id);
    if (!curso) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        });
    }
    yield curso.update({ estado: false });
    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    });
});
exports.deleteCurso = deleteCurso;
//# sourceMappingURL=curso.js.map