/**
 * @file index.js
 * @author simpart
 */

/**
 * @class layout.Horizon
 * @brief horizon layout class
 */
mofron.layout.Horizon = class extends mofron.Layout {
    layout () {
        try {
            this.target().style('display', '-webkit-flex');
            this.target().style('display', 'flex');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
