export default class Router {
  /**
   * @typedef {import('./application').middlewareHandler} middlewareHandler
   */

  /**
   * @typedef MiddlewareRoute
   * @property {string} name
   * @property {middlewareHandler} fn
   */

  /**
   * @param {Logger} logger
   */
  constructor(logger) {
    /**
     * @type {MiddlewareRoute[]}
     */
    this.middlewareRoutes = [];
    this.logger = logger;
  }

  routes() {
    const dispatch = (context, next) => {
      let mw = this.find(context);
      if (!mw) {
        next();
        return;
      }
      mw.fn(context, next);
    };
    return dispatch;
  }

  /**
   * @param {Object} context
   * @returns {MiddlewareRoute}
   * @private
   */
  find(context) {
    if (context.caller.type !== "profile") {
      return;
    }

    return this.middlewareRoutes.find(
      route =>
        route.name === `${context.caller.name}:${context.caller.subCallerName}`
    );
  }

  /**
   * @param {string} name
   * @param {middlewareHandler} fn
   */
  enter(name, fn) {
    this.middlewareRoutes.push({ name: `enter:${name}`, fn });
  }

  /**
   * @param {string} name
   * @param {middlewareHandler} fn
   */
  exit(name, fn) {
    this.middlewareRoutes.push({ name: `exit:${name}`, fn });
  }
}
