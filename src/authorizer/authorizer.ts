import { Effect } from './effect'
import { ObjectLiteral } from '../../types/definitions'
import { getAuthorizerMetadataStorage } from '../metadata/get.storage'

declare type AuthorizerClassDecoratorResult = <T extends { new (...args: any[]): ObjectLiteral }>(t: T) => any

export function Authorizer(effect?: Effect | undefined): AuthorizerClassDecoratorResult {
  return function <T extends { new (...args: any[]): ObjectLiteral }>(Target: T) {
    const resolverNames = Object.getOwnPropertyNames(Target.prototype).filter((item) => item !== 'constructor')
    resolverNames.forEach((method) => {
      // Get metadata from the target method
      let authorizerEffect: Effect | undefined = Reflect.getMetadata('authorizer:effect', Target.prototype, method)
      
      if (effect === undefined || effect === Effect.DENY) {
        authorizerEffect = authorizerEffect === undefined ? Effect.DENY : authorizerEffect
      } else if (effect === Effect.ALLOW) {
        authorizerEffect = authorizerEffect === undefined ? Effect.ALLOW : authorizerEffect
      }

      const storage = getAuthorizerMetadataStorage()

      if(storage.hasKey(method)) throw new Error('Resolvers can\'t have same names')

      storage.collectMetadata(method, {
        method,
        conditions: {},
        type: Target.name,
        effect: authorizerEffect!!,
        permissions: Reflect.getMetadata('authorizer:permissions', Target.prototype, method) || [],
      })
    })
  }
}
