/**
 * Checks whether a value is an async function
 *
 * @module isasync
 * @author Denis Maslennikov <mrdenniska@gmail.com> (nofach.com)
 * @license MIT
 */

/**
 * Exports
 * @public
 */
module.exports = (fn) => {
    return Object.prototype.toString.call(fn) === '[object AsyncFunction]';
};
