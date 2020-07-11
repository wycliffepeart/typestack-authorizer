export function Permissions(...permissions: string[]): MethodDecorator {
  return Reflect.metadata('authorizer:permissions', permissions)
}
