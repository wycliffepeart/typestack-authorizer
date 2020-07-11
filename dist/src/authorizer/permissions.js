"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permissions = void 0;
function Permissions(...permissions) {
    return Reflect.metadata('authorizer:permissions', permissions);
}
exports.Permissions = Permissions;
//# sourceMappingURL=permissions.js.map