"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allow = void 0;
const effect_1 = require("./effect");
function Allow() {
    return Reflect.metadata('authorizer:effect', effect_1.Effect.ALLOW);
}
exports.Allow = Allow;
//# sourceMappingURL=allow.js.map