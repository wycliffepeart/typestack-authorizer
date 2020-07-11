"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizerMetadataStorage = void 0;
class AuthorizerMetadataStorage {
    constructor() {
        this.authorizer = {};
    }
    collectMetadata(key, definition) {
        this.authorizer[key] = definition;
    }
    hasKey(key) {
        return this.authorizer.hasOwnProperty(key);
    }
    get(key) {
        return this.authorizer[key];
    }
}
exports.AuthorizerMetadataStorage = AuthorizerMetadataStorage;
//# sourceMappingURL=metadata.storage.js.map