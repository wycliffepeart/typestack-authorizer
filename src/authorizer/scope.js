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
exports.ScopeAuthorizer = void 0;
const type_graphql_1 = require("type-graphql");
const middleware_callback_1 = require("../middleware/middleware.callback");
function ScopeAuthorizer(effect, options = { conditions: {}, permissions: [] }) {
    return type_graphql_1.createMethodDecorator((data, next) => __awaiter(this, void 0, void 0, function* () {
        const authorizer = {
            type: undefined,
            effect: effect,
            method: data.info.fieldName,
            conditions: options.conditions,
            permissions: options.permissions,
        };
        yield middleware_callback_1.invokeAuthorizerMiddlewareCallback(Object.assign(Object.assign({}, data), { authorizer }));
        return yield next();
    }));
}
exports.ScopeAuthorizer = ScopeAuthorizer;
//# sourceMappingURL=scope.js.map