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
exports.deleteAula_usuario = exports.putAula_usuario = exports.postAula_usuario = exports.getAula_usuarioID = exports.getAula_usuario = void 0;
const model_1 = require("../model");
const getAula_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const aula_usuario = yield model_1.Aula_usuario.findAll({
        include: [model_1.Usuario, model_1.Aula]
    });
    res.status(200).json(aula_usuario);
});
exports.getAula_usuario = getAula_usuario;
const getAula_usuarioID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const aula_usuario = yield model_1.Aula_usuario.findByPk(id);
    res.status(200).json(aula_usuario);
});
exports.getAula_usuarioID = getAula_usuarioID;
const postAula_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const aula_usuario = yield model_1.Aula_usuario.create(body);
        yield aula_usuario.save();
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
exports.postAula_usuario = postAula_usuario;
const putAula_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const aula_usuario = yield model_1.Aula_usuario.findByPk(id);
        if (!aula_usuario) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            });
        }
        yield aula_usuario.update(body);
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
exports.putAula_usuario = putAula_usuario;
const deleteAula_usuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const aula_usuario = yield model_1.Aula_usuario.findByPk(id);
    if (!aula_usuario) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        });
    }
    yield aula_usuario.update({ estado: false });
    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    });
});
exports.deleteAula_usuario = deleteAula_usuario;
//# sourceMappingURL=aula_usuario.js.map