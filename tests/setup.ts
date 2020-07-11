import { NextFn } from 'type-graphql'
import { AuthorizerData } from '../types'
import { Authorizer, Allow, Deny, registerAuthorizerMiddleware, Effect } from '..'

@Authorizer()
class PostDenyResolver {
  @Allow()
  createPost() {}

  @Allow()
  updatePost() {}

  deletePost() {}
}

@Authorizer(Effect.ALLOW)
class UserAllowResolver {
  @Deny()
  createUser() {}

  @Deny()
  updateUser() {}

  deleteUser() {}
}

new PostDenyResolver()
new UserAllowResolver()

export const buildContext: any = (fieldName: string) => ({ args: {}, info: { fieldName }, context: {}, root: {} })

export const middleware = registerAuthorizerMiddleware(async ({ authorizer }: AuthorizerData, next: NextFn) => {
  // console.log('Authorizer', authorizer)

  if (authorizer.effect === Effect.ALLOW) {
    return await next()
  } else if (authorizer.effect === Effect.DENY) {
    throw new Error('Unauthorized')
  } else {
    // else
  }
})
