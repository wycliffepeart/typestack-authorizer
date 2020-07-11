import { AuthorizerResolverMetadataOptions } from '../../types';
export declare class AuthorizerMetadataStorage {
    readonly authorizer: {
        [key: string]: AuthorizerResolverMetadataOptions;
    };
    collectMetadata(key: string, definition: AuthorizerResolverMetadataOptions): void;
    hasKey(key: string): boolean;
    get(key: string): AuthorizerResolverMetadataOptions;
}
