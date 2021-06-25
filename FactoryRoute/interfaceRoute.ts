export interface RouteMap {
  verb: string
  routeClass: any
}

export enum EnumVerbRoute {
  CREATE = 'create',
  UPDATE = 'update',
  READ = 'read',
  READ_ALL = 'readAll',
  DELETE = 'delete',
}

export interface RouteBuilder {
  moduleName: string
  verbRoute?: EnumVerbRoute[]
}
