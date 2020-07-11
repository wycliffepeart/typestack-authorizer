import { AuthorizerMetadataStorage } from './metadata.storage'
export function getAuthorizerMetadataStorage(): AuthorizerMetadataStorage {
  return (global as any).SkeletonMetadataStorage || ((global as any).SkeletonMetadataStorage = new AuthorizerMetadataStorage())
}
