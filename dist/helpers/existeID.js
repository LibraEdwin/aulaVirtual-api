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
exports.existeID = void 0;
const model_1 = require("../model");
const existeID = (id = '') => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_1.Usuario.findByPk(id);
    if (!user) {
        throw new Error(`El ID ${id} no existe`);
    }
});
exports.existeID = existeID;
//# sourceMappingURL=existeID.js.map