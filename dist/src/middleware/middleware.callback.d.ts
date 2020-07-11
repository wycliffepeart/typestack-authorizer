import { AuthorizerMiddlewareCallback, AuthorizerData } from '../../types';
export declare function registerAuthorizerMiddlewareCallback(callback: Function): AuthorizerMiddlewareCallback;
export declare function invokeAuthorizerMiddlewareCallback(resolverData: AuthorizerData): Promise<void>;
