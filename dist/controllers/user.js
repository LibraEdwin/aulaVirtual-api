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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUserID = exports.getUser = void 0;
const model_1 = require("../model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_validator_1 = require("express-validator");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_1.Usuario.findAll(
    //     {
    //     attributes:[
    //         'nombres','apellidos','correo','contraseña','img','rol'
    //     ],
    //     include: [
    //         Actividad
    //     ],
    //     where:{
    //         rol:'DOCENTE'
    //     }
    // }
    );
    res.status(200).json(user);
});
exports.getUser = getUser;
const getUserID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield model_1.Usuario.findByPk(id);
    res.status(200).json(user);
});
exports.getUserID = getUserID;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    const { nombres, apellidos, correo, password, img, rol } = req.body;
    const existeCorreo = yield model_1.Usuario.findAll({
        where: {
            correo
        }
    });
    if (existeCorreo) {
        return res.status(400).json({
            ok: false,
            msg: 'El correo ya esta registrado'
        });
    }
    try {
        const salt = bcryptjs_1.default.genSaltSync();
        const contraseña = bcryptjs_1.default.hashSync(password, salt);
        const user = yield model_1.Usuario.create({ nombres, apellidos, correo, contraseña, img, rol });
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
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield model_1.Usuario.findByPk(id);
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
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield model_1.Usuario.findByPk(id);
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
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map