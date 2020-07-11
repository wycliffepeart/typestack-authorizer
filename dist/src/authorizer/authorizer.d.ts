import { Effect } from './effect';
import { ObjectLiteral } from '../../types';
declare type AuthorizerClassDecoratorResult = <T extends {
    new (...args: any[]): ObjectLiteral;
}>(t: T) => any;
export declare function Authorizer(effect?: Effect | undefined): AuthorizerClassDecoratorResult;
export {};
