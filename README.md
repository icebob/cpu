cpu
===
Promise-based CPU Usage meter. No dependencies!

### Install

```bash
npm install cpu
```

### Usage

```javascript
var cpu = require('@icebob/cpu');

cpu().then(({avg, usages}) => {
  console.log(avg, usages);
});
``` 

**Change sample time:**
```javascript
var cpu = require('@icebob/cpu');

cpu(500).then(({avg, usages}) => {
  console.log(avg, usages);
});
``` 
