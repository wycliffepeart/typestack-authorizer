import { Effect } from './effect'

export function Deny(): MethodDecorator {
  return Reflect.metadata('authorizer:effect', Effect.DENY)
}
