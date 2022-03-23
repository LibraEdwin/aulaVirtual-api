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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUserID = exports.getUser = void 0;
const model_1 = require("../model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
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
    let { nombres, apellidos, correo, contraseña, img, rol } = req.body;
    try {
        const salt = bcryptjs_1.default.genSaltSync();
        contraseña = bcryptjs_1.default.hashSync(contraseña, salt);
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
    let _a = req.body, { idusuarios, correo, rol, estado, createdAt, updatedAt } = _a, resto = __rest(_a, ["idusuarios", "correo", "rol", "estado", "createdAt", "updatedAt"]);
    if (resto.contraseña) {
        const salt = bcryptjs_1.default.genSaltSync();
        resto.contraseña = bcryptjs_1.default.hashSync(resto.contraseña, salt);
    }
    try {
        let user;
        user = yield model_1.Usuario.findByPk(id);
        yield user.update(resto);
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