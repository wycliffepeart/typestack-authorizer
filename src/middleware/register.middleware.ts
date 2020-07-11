import { AuthorizerMiddlewareCallback } from '../types'
import { MiddlewareFn, NextFn, ResolverData } from 'type-graphql'
import { getAuthorizerMetadataStorage } from '../metadata/get.storage'
import { registerAuthorizerMiddlewareCallback } from './middleware.callback'

export function registerTypeGraphqlGlobalMiddleware(asyncCallback: AuthorizerMiddlewareCallback): MiddlewareFn {

  return async (context: ResolverData, next: NextFn) => {  
    const authorizerData = getAuthorizerMetadataStorage().authorizer
    if (authorizerData.hasOwnProperty(context.info.fieldName)) {
      const callback = registerAuthorizerMiddlewareCallback(asyncCallback)
  
      await callback({ ...context, authorizer: authorizerData[context.info.fieldName] }, next)
    } else {
      return await next()
    }
  }
}
