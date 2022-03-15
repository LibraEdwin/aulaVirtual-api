"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const routerUser = (0, express_1.Router)();
routerUser.get('/', user_1.getUser);
routerUser.get('/:id', user_1.getUserID);
routerUser.post('/', user_1.postUser);
routerUser.put('/:id', user_1.putUser);
routerUser.delete('/:id', user_1.deleteUser);
exports.default = routerUser;
//# sourceMappingURL=user.js.map