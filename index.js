/**
 * @file mofron-layout-horizon/index.js
 * @brief horizon layout for mofron
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class layout.Horizon
 * @brief horizon layout class
 */
mf.layout.Horizon = class extends mf.Layout {
    
    constructor (po) {
        try {
            super();
            this.name('Horizon');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    /**
     * set horizon style
     *
     * @note private method
     */
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
module.exports = mf.layout.Horizon;
/* end of file */
