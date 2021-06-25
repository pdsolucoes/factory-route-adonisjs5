/// <reference path="../node_modules/@adonisjs/http-server/build/adonis-typings/route.d.ts" />
import Route from '@ioc:Adonis/Core/Route'
import BaseRoute from './base-route'

export default class ReadAllVerb extends BaseRoute {
  private routeVerb: string
  private controllerVerb: string

  constructor(moduleName: string) {
    super(moduleName)
    this.routeVerb = 'readAll'
    this.controllerVerb = 'readAll'

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
    Route.get(this.url, this.controller).middleware('auth')
  }
}
