"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorizerMetadataStorage = void 0;
const metadata_storage_1 = require("./metadata.storage");
function getAuthorizerMetadataStorage() {
    return global.SkeletonMetadataStorage || (global.SkeletonMetadataStorage = new metadata_storage_1.AuthorizerMetadataStorage());
}
exports.getAuthorizerMetadataStorage = getAuthorizerMetadataStorage;
//# sourceMappingURL=get.storage.js.map