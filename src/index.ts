import 'reflect-metadata'
export { AuthorizerData } from './types'
export { Deny } from './authorizer/deny'
export { Allow } from './authorizer/allow'
export { Effect } from './authorizer/effect'
// export { AuthorizerParams } from './types/index'
// export { ScopeAuthorizer } from './src/authorizer/scope'
export { Authorizer } from './authorizer/authorizer'
// export { Permissions } from './src/authorizer/permissions'
export { registerTypeGraphqlGlobalMiddleware } from './middleware/register.middleware'