import { Effect } from './effect'

export function Allow(): MethodDecorator {
  return Reflect.metadata('authorizer:effect', Effect.ALLOW)
}
