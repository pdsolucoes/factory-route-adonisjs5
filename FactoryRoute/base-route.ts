export default abstract class BaseRoute {
  protected moduleName: string
  protected url: string
  protected controller: string

  private static prefix: string

  constructor(moduleName: string) {
    this.moduleName = moduleName
    this.url
    this.controller

    this.format()
  }

  protected format() {
    BaseRoute.prefix = this.moduleName.toLowerCase()
    if (this.moduleName.includes('-')) {
      BaseRoute.prefix = this.moduleName.split('-').join('_').toLowerCase()
    }
  }

  public static getPrefix() {
    return BaseRoute.prefix
  }

  abstract buildRoute(): any
}
