/// <reference path="./FactoryRoute/interfaceRoute.ts" />
/// <reference path="./FactoryRoute/route.factory.ts" />
import { EnumVerbRoute, RouteBuilder, RouteMap } from './FactoryRoute/interfaceRoute'
import RouteFactory from './FactoryRoute/route.factory'

export {EnumVerbRoute, RouteBuilder, RouteMap}

export default abstract class GenerateRouteService {
  /**
   * Generate routes to the API
   * @param modules Crud models that will receive routes
   */
  public static async handler(modules: RouteBuilder[]) {
    modules.forEach(({ moduleName, verbRoute }) => {
      verbRoute = verbRoute
        ? verbRoute
        : [EnumVerbRoute.CREATE, EnumVerbRoute.READ, EnumVerbRoute.READ_ALL, EnumVerbRoute.UPDATE]

      verbRoute.forEach((verb) => {
        RouteFactory.builderRoute(verb, moduleName)
      })
    })
  }
}
