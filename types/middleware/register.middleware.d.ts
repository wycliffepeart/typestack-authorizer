import { AuthorizerMiddlewareCallback } from '../types';
import { MiddlewareFn } from 'type-graphql';
export declare function registerTypeGraphqlGlobalMiddleware(asyncCallback: AuthorizerMiddlewareCallback): MiddlewareFn;
