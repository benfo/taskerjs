/// <reference path="./tasker.d.ts" />
import compose from "./compose";
import Logger from "./logger";

/**
 * @typedef Context
 * @property {Tasker} tasker
 * @property {CallerInfo} callerInfo
 */

/**
 * @typedef CallerInfo
 * @property {String} type
 * @property {String} name
 * @property {String} subCallerName
 */

/**
 * @callback middlewareHandler
 * @param {Context} context
 * @param {function()} next
 */

export default class Application {
  /**
   * @param {Tasker} tasker
   * @param {Logger} logger
   */
  constructor(tasker, logger) {
    this.middleware = [];
    this.tasker = tasker;
    this.logger = logger;
  }

  /**
   * Starts the application.
   */
  run() {
    const middlewareFn = compose(this.middleware);
    const context = this.createContext();

    middlewareFn(context);

    this.tasker.exit();
  }

  /**
   * Creates a context.
   * @returns {Context}
   */
  createContext() {
    return {
      tasker: this.tasker,
      caller: this.getCaller()
    };
  }

  /**
   * Adds a middleware handler.
   * @param {middlewareHandler} fn
   */
  use(fn) {
    this.middleware.push(fn);
  }

  /**
   * @returns {CallerInfo}
   */
  getCaller() {
    const caller = this.tasker.local("caller1");
    const callerInfo = /^(\w+)(?:=(.+?)(?::(.+?))?)?$/i.exec(caller);
    if (!callerInfo) {
      return;
    }

    return {
      type: callerInfo[1],
      name: callerInfo[2],
      subCallerName: callerInfo[3]
    };
  }
}
