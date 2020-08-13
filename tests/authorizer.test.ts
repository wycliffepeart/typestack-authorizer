import { Suite } from 'mocha'
import { expect } from 'chai'
import { Effect } from '../src'
import {buildContext, middleware} from './setup'
import { getAuthorizerMetadataStorage } from '../src/metadata/get.storage'

describe('Authorizer Storage Test', async function (this: Suite) {
  const storage = getAuthorizerMetadataStorage()

  it('createPost is stored', () => expect(storage.hasKey('createPost')).equal(true))
  it('createPost is allowed', () => expect(storage.get('createPost').effect).equal(Effect.ALLOW))

  it('updatePost is stored', () => expect(storage.hasKey('updatePost')).equal(true))
  it('updatePost is allowed', () => expect(storage.get('updatePost').effect).equal(Effect.ALLOW))

  it('deletePost is stored', () => expect(storage.hasKey('deletePost')).equal(true))
  it('deletePost is denied', () => expect(storage.get('deletePost').effect).equal(Effect.DENY))

  it('createUser is stored', () => expect(storage.hasKey('createUser')).equal(true))
  it('createUser is denied', () => expect(storage.get('createUser').effect).equal(Effect.DENY))

  it('updateUser is stored', () => expect(storage.hasKey('updateUser')).equal(true))
  it('updateUser is denied', () => expect(storage.get('updateUser').effect).equal(Effect.DENY))

  it('deleteUser is stored', () => expect(storage.hasKey('deleteUser')).equal(true))
  it('deleteUser is allowed', () => expect(storage.get('deleteUser').effect).equal(Effect.ALLOW))

})

describe('Authorizer Middleware PostResolver Test', async function (this: Suite) {

  it('Middleware createPost is allowed', async () => await middleware(buildContext('createPost'), async () => {}))
  it('Middleware updatePost is allowed', async () => await middleware(buildContext('updatePost'), async () => {}))
  it('Middleware deletePost is denied', async () => await middleware(buildContext('deletePost'), async () => {}).catch((error) => error))
})

describe('Authorizer Middleware UserResolver Test', async function (this: Suite) {

  it('Middleware createUser is denied', async () => await middleware(buildContext('createUser'), async () => {}).catch((error) => error))
  it('Middleware updateUser is denied', async () => await middleware(buildContext('updateUser'), async () => {}).catch((error) => error))
  it('Middleware deletePost is allowed', async () => await middleware(buildContext('deleteUser'), async () => {}))
})
