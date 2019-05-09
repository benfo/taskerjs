/**
 * Returns a middleware function composed
 * from a list of middlewares.
 * @param {Array} functions
 * @returns {Function}
 */
export default function compose(functions) {
  /**
   * @param {Object} context
   */
  return function(context) {
    dispatch(0);

    function dispatch(i) {
      let fn = functions[i];
      if (!fn) return;
      fn(context, dispatch.bind(null, i + 1));
    }
  };
}
