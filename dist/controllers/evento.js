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
exports.deleteEvento = exports.putEvento = exports.postEvento = exports.getEventoID = exports.getEvento = void 0;
const model_1 = require("../model");
const getEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const evento = yield model_1.Evento.findAll({
        include: {
            model: model_1.Usuario
        }
    });
    res.status(200).json(evento);
});
exports.getEvento = getEvento;
const getEventoID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const evento = yield model_1.Evento.findByPk(id);
    res.status(200).json(evento);
});
exports.getEventoID = getEventoID;
const postEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const evento = yield model_1.Evento.create(body);
        yield evento.save();
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
exports.postEvento = postEvento;
const putEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const evento = yield model_1.Evento.findByPk(id);
        if (!evento) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            });
        }
        yield evento.update(body);
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
exports.putEvento = putEvento;
const deleteEvento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const evento = yield model_1.Evento.findByPk(id);
    if (!evento) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        });
    }
    yield evento.update({ estado: false });
    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    });
});
exports.deleteEvento = deleteEvento;
//# sourceMappingURL=evento.js.map