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
exports.registerTypeGraphqlGlobalMiddleware = void 0;
const get_storage_1 = require("../metadata/get.storage");
const middleware_callback_1 = require("./middleware.callback");
exports.registerTypeGraphqlGlobalMiddleware = (asyncCallback) => (context, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authorizerData = get_storage_1.getAuthorizerMetadataStorage().authorizer;
    if (authorizerData.hasOwnProperty(context.info.fieldName)) {
        const callback = middleware_callback_1.registerAuthorizerMiddlewareCallback(asyncCallback);
        yield callback(Object.assign(Object.assign({}, context), { authorizer: authorizerData[context.info.fieldName] }), next);
    }
    else {
        return yield next();
    }
});
//# sourceMappingURL=register.middleware.js.map