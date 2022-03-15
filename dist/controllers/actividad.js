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
exports.deleteActividad = exports.putActividad = exports.postActividad = exports.getActividadID = exports.getActividad = void 0;
const actividad_1 = __importDefault(require("../model/actividad"));
const getActividad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const actividad = yield actividad_1.default.findAll();
    res.status(200).json(actividad);
});
exports.getActividad = getActividad;
const getActividadID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const actividad = yield actividad_1.default.findByPk(id);
    res.status(200).json(actividad);
});
exports.getActividadID = getActividadID;
const postActividad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const actividad = yield actividad_1.default.create(body);
        yield actividad.save();
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
exports.postActividad = postActividad;
const putActividad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const actividad = yield actividad_1.default.findByPk(id);
        if (!actividad) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            });
        }
        yield actividad.update(body);
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
exports.putActividad = putActividad;
const deleteActividad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const actividad = yield actividad_1.default.findByPk(id);
    if (!actividad) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        });
    }
    yield actividad.update({ estado: false });
    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    });
});
exports.deleteActividad = deleteActividad;
//# sourceMappingURL=actividad.js.map