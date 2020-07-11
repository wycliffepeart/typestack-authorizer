"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorizer = void 0;
const effect_1 = require("./effect");
const get_storage_1 = require("../metadata/get.storage");
function Authorizer(effect) {
    return function (Target) {
        const resolverNames = Object.getOwnPropertyNames(Target.prototype).filter((item) => item !== 'constructor');
        resolverNames.forEach((method) => {
            let authorizerEffect = Reflect.getMetadata('authorizer:effect', Target.prototype, method);
            if (effect === undefined || effect === effect_1.Effect.DENY) {
                authorizerEffect = authorizerEffect === undefined ? effect_1.Effect.DENY : authorizerEffect;
            }
            else if (effect === effect_1.Effect.ALLOW) {
                authorizerEffect = authorizerEffect === undefined ? effect_1.Effect.ALLOW : authorizerEffect;
            }
            const storage = get_storage_1.getAuthorizerMetadataStorage();
            if (storage.hasKey(method))
                throw new Error('Resolvers can\'t have same names');
            storage.collectMetadata(method, {
                method,
                conditions: {},
                type: Target.name,
                effect: authorizerEffect,
                permissions: Reflect.getMetadata('authorizer:permissions', Target.prototype, method) || [],
            });
        });
    };
}
exports.Authorizer = Authorizer;
//# sourceMappingURL=authorizer.js.map