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
exports.invokeAuthorizerMiddlewareCallback = exports.registerAuthorizerMiddlewareCallback = void 0;
const SingletonAuthorizerCallbackKey = 'SingletonAuthorizerCallbackKey';
function registerAuthorizerMiddlewareCallback(callback) {
    return global[SingletonAuthorizerCallbackKey] || (global[SingletonAuthorizerCallbackKey] = callback);
}
exports.registerAuthorizerMiddlewareCallback = registerAuthorizerMiddlewareCallback;
function invokeAuthorizerMiddlewareCallback(resolverData) {
    return __awaiter(this, void 0, void 0, function* () {
        if (global[SingletonAuthorizerCallbackKey])
            global[SingletonAuthorizerCallbackKey](resolverData);
        else
            throw new Error('Something went wrong while processing your request');
    });
}
exports.invokeAuthorizerMiddlewareCallback = invokeAuthorizerMiddlewareCallback;
//# sourceMappingURL=middleware.callback.js.map