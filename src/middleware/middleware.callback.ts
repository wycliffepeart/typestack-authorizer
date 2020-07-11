import { AuthorizerMiddlewareCallback, AuthorizerData } from '../types'

const SingletonAuthorizerCallbackKey = 'SingletonAuthorizerCallbackKey'

export function registerAuthorizerMiddlewareCallback(callback: Function): AuthorizerMiddlewareCallback {
  return (global as any)[SingletonAuthorizerCallbackKey] || ((global as any)[SingletonAuthorizerCallbackKey] = callback)
}

export async function invokeAuthorizerMiddlewareCallback(resolverData: AuthorizerData) {
  if ((global as any)[SingletonAuthorizerCallbackKey]) (global as any)[SingletonAuthorizerCallbackKey](resolverData)
  else throw new Error('Something went wrong while processing your request')
}
