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
exports.deleteCurso_usuario = exports.putCurso_usuario = exports.postCurso_usuario = exports.getCurso_usuarioID = exports.getCurso_usuario = void 0;
const model_1 = require("../model");
const getCurso_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const curso_usuarios = yield model_1.Curso_usuario.findAll();
    res.status(200).json(curso_usuarios);
});
exports.getCurso_usuario = getCurso_usuario;
const getCurso_usuarioID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const curso_usuarios = yield model_1.Curso_usuario.findByPk(id);
    res.status(200).json(curso_usuarios);
});
exports.getCurso_usuarioID = getCurso_usuarioID;
const postCurso_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const curso_usuarios = yield model_1.Curso_usuario.create(body);
        yield curso_usuarios.save();
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
exports.postCurso_usuario = postCurso_usuario;
const putCurso_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const curso_usuarios = yield model_1.Curso_usuario.findByPk(id);
        if (!curso_usuarios) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            });
        }
        yield curso_usuarios.update(body);
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
exports.putCurso_usuario = putCurso_usuario;
const deleteCurso_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const curso_usuarios = yield model_1.Curso_usuario.findByPk(id);
    if (!curso_usuarios) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        });
    }
    yield curso_usuarios.update({ estado: false });
    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    });
});
exports.deleteCurso_usuario = deleteCurso_usuario;
//# sourceMappingURL=curso_usuario.js.map