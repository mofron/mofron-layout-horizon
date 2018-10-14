/**
 * @file index.js
 * @author simpart
 */

/**
 * @class layout.Horizon
 * @brief horizon layout class
 */
mofron.layout.Horizon = class extends mofron.Layout {
    
    constructor (po) {
        try {
            super();
            this.name('Horizon');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    execute () {
        try {
            this.component().style({
                'display' : '-webkit-flex',
                'display' : 'flex'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Horizon;
/* end of file */
