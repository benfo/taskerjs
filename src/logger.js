export default class Logger {
  /**
   * @param {Tasker} tasker
   */
  constructor(tasker) {
    this.tasker = tasker;
    this.infoEnabled = false;
  }

  /**
   * @param {Function} fn
   */
  info(fn) {
    if (this.infoEnabled) {
      this.tasker.flash(fn());
    }
  }
}
