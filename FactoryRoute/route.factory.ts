import BaseRoute from './base-route'
import CreateVerb from './createVerb'
import ReadVerb from './readVerb'
import ReadAllVerb from './readAllVerb'
import UpdateVerb from './updateVerb'
import { EnumVerbRoute, RouteMap } from './interfaceRoute'
import DeleteVerb from './deleteVerb'

/// <reference path="../node_modules/@adonisjs/http-server/build/adonis-typings/route.d.ts" />
import Route from '@ioc:Adonis/Core/Route'

const routeCreate: RouteMap = { verb: 'create', routeClass: CreateVerb }
const routeRead: RouteMap = { verb: 'read', routeClass: ReadVerb }
const routeReadAll: RouteMap = { verb: 'readAll', routeClass: ReadAllVerb }
const routeUpdate: RouteMap = { verb: 'update', routeClass: UpdateVerb }
const routeDelete: RouteMap = { verb: 'delete', routeClass: DeleteVerb }

const routeMap: RouteMap[] = [routeCreate, routeRead, routeReadAll, routeUpdate, routeDelete]

class RouteFactory {
  constructor() {}

  public builderRoute(route: EnumVerbRoute, moduleName: string) {
    let routeInstance: BaseRoute

    Route.group(() => {
      routeMap.forEach((verbRoute) => {
        if (route === verbRoute.verb) {
          routeInstance = new verbRoute.routeClass(moduleName)
          routeInstance.buildRoute()
        }
      })
    }).prefix(BaseRoute.getPrefix())
  }
}

export default new RouteFactory()
