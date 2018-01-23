var cpu = require('./index');

cpu().then(({avg, usages}) => {
  console.log(Math.round(avg) + "% [" + usages.map((n, i) => `CPU ${i}: ${n.toFixed(2)}%`).join(", ") + "]");
});