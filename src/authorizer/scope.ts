import { Effect } from './effect'
import { createMethodDecorator } from 'type-graphql'
import { invokeAuthorizerMiddlewareCallback } from '../middleware/middleware.callback'

export function ScopeAuthorizer(effect: Effect, options: { conditions: {}; permissions: [] } = { conditions: {}, permissions: [] }): MethodDecorator {
  return createMethodDecorator(async (data, next) => {
    const authorizer = {
      type: undefined,
      effect: effect,
      method: data.info.fieldName,
      conditions: options.conditions,
      permissions: options.permissions,
    }

    await invokeAuthorizerMiddlewareCallback({ ...data, authorizer })

    return await next()
  })
}
