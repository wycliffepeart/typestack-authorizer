# Typestack Authorizer

> Indevelopment

Opinionated authorizer using the power of typescript annotation to annotate `ClassType` and `Methods`,

**[Installation](/#instalation)**

**[Authorizer]()**

**[Allow Access]()**

**[Deny Access]()**

**[Type Graphql Middleware]()**

## Installation

```
npm install typestack-authorizer
```

## Authorizer

```ts
@Authorizer()
export class PostResolver { }
```

## Allow Access

```ts
@Allow()
createPost(){ }
```

## Deny Access

```ts
@Deny()
deletePost(){ }
```

## Type Graphql Global Middleware

```ts
import { NextFn } from 'type-graphql'
import { Effect, AuthorizerData } from 'typestack-authorizer'


async function authorizer({ authorizer }: AuthorizerData, next: NextFn){
  
  if (authorizer.effect === Effect.ALLOW) {
  
    return await next()
  
  } else if (authorizer.effect === Effect.DENY) {
    
    throw new Error('Unauthorized')
  
  } else {

    // else
  
  }

}

registerTypeGraphqlGlobalMiddleware(authorizer)
```