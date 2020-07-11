import { AuthorizerResolverMetadataOptions } from '../../types'

export class AuthorizerMetadataStorage {
  readonly authorizer: { [key: string]: AuthorizerResolverMetadataOptions } = {}

  collectMetadata(key: string, definition: AuthorizerResolverMetadataOptions) {
    this.authorizer[key] = definition
  }

  hasKey(key: string): boolean {
    return this.authorizer.hasOwnProperty(key)
  }
  get(key: string): AuthorizerResolverMetadataOptions {
    return this.authorizer[key]
  }
}
