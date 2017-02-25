# mofron-layout-hrizon
Horizon layout for mofron component.<br>
This layout displays component side by side.<br>
please see [here](https://github.com/simpart/mofron) about an overview of mofron.

# Install

```bash
npm install mofron-layout-hrzcenter
```

# sample
```javascript
require('mofron');
let Text    = require('mofron-comp-text');
let Horizon = require('mofron-layout-horizon');

new mofron.Component({
    layout  : new Horizon(),
    child   : [new Text('child 1'),
               new Text('child 2'),
               new Text('child 3')],
    visible : true
});
```
