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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioID = exports.getUsuario = void 0;
const usuario_1 = __importDefault(require("../model/usuario"));
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_1.default.findAll();
    res.status(200).json(usuario);
});
exports.getUsuario = getUsuario;
const getUsuarioID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usuario_1.default.findByPk(id);
    res.status(200).json(user);
});
exports.getUsuarioID = getUsuarioID;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = yield usuario_1.default.create(body);
        yield user.save();
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
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield usuario_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: `No existe el usuario con el id: ${id}`
            });
        }
        yield user.update(body);
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
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usuario_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            ok: false,
            msg: `No existe el usuario con el id: ${id}`
        });
    }
    yield user.update({ estado: false });
    res.status(200).json({
        ok: true,
        msg: 'Usuario desactivado '
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=Usuario.js.map