/**
 * @file index.js
 * @author simpart
 */

/**
 * @class layout.Horizon
 * @brief horizon layout class
 */
mofron.layout.Horizon = class extends mofron.Layout {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('Horizon');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
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
module.exports = mofron.layout.Horizon;
