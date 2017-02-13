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
            if (0 !== this.exec_cnt) {
                return;
            }
            
            this.target.style('display', '-webkit-flex');
            this.target.style('display', 'flex');
            this.exec_cnt++;
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
