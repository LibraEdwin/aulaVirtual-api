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
exports.putUsuarioAlumno = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const model_1 = require("../../model");
const putUsuarioAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let { nombres, apellidos, correo, contraseña, img } = req.body;
    if (contraseña) {
        const salt = bcryptjs_1.default.genSaltSync();
        contraseña = bcryptjs_1.default.hashSync(contraseña, salt);
    }
    try {
        let user;
        user = yield model_1.Usuario.findByPk(id);
        yield user.update({ nombres, apellidos, correo, contraseña, img });
        res.status(201).json({
            ok: true,
            msg: 'Usuario actualizaddo'
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUsuarioAlumno = putUsuarioAlumno;
//# sourceMappingURL=controllersPutAdmin.js.map