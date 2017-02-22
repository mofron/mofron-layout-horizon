# mofron-layout-hrizon
Horizon layout for mofron component.<br>
please see [here](https://github.com/simpart/mofron) about an overview of mofron.

# Install

```bash
npm install mofron-layout-hrzcenter
```

# sample
```javascript
require('mofron');
let Frame = require('mofron-comp-frame');
let Text  = require('mofron-comp-text');
let Horiz = require('mofron-layout-horizon');

let text1 = new Text({
                    param : 'Test_1',
                    size  : 30
                });
let text2 = new Text({
                    param : 'Test_2',
                    size  : 30
                });

new Frame({
    param   : [50,200],
    layout  : new Horiz(),
    child   : [text1,text2],
    visible : true
});
```
