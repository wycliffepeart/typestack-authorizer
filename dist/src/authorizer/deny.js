"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deny = void 0;
const effect_1 = require("./effect");
function Deny() {
    return Reflect.metadata('authorizer:effect', effect_1.Effect.DENY);
}
exports.Deny = Deny;
//# sourceMappingURL=deny.js.map