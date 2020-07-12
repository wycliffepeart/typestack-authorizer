import { Effect } from '..';
import { NextFn, ResolverData } from 'type-graphql';
export interface AuthorizerParams {
    effect: Effect;
    conditions: {};
}
export interface AuthorizerResolverMetadataOptions extends AuthorizerParams {
    type?: string;
    method: string;
    permissions: string[];
}
export interface AuthorizerData extends ResolverData {
    authorizer: AuthorizerResolverMetadataOptions;
}
export declare type AuthorizerMiddlewareCallback = (resolverData: AuthorizerData, next: NextFn) => Promise<any>;
export interface ObjectLiteral {
    [key: string]: any;
}
