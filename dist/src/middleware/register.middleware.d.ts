import { AuthorizerMiddlewareCallback } from '../../types';
import { MiddlewareFn } from 'type-graphql';
export declare const registerTypeGraphqlGlobalMiddleware: (asyncCallback: AuthorizerMiddlewareCallback) => MiddlewareFn;
