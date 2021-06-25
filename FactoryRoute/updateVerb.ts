import Route from '@ioc:Adonis/Core/Route'
import BaseRoute from './base-route'

export default class UpdateVerb extends BaseRoute {
  private routeVerb: string
  private controllerVerb: string

  constructor(moduleName: string) {
    super(moduleName)
    this.routeVerb = 'update'
    this.controllerVerb = 'updateById'

    this.setUrl()
    this.setController()
  }

  public setUrl() {
    this.url = `/${this.routeVerb}`
  }

  public setController() {
    this.controller = `${this.moduleName}Controller.${this.controllerVerb}`
  }

  public buildRoute() {
    Route.post(this.url, this.controller).middleware('auth')
  }
}
