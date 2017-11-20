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
    
    layoutConts () {
        try {
            if (0 === this.m_execnt++) {
                this.target().style({
                    'display' : '-webkit-flex',
                    'display' : 'flex'
                });
            }
            if (null !== this.target().parent()) {
                this.target().style({
                    '-webkit-padding-start' : '0.1px'
                });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Horizon;
