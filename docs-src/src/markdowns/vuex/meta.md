```js
// State

const stepsMap = new Map([
  [1, { route: { name: 'step-1' } }],
  [2, { route: { name: 'step-2' } }],
  [3, { route: { name: 'step-3' } }]
])

const state = {
  step: 1,
  steps: stepsMap.size,
  stepsMap: stepsMap
 }

// Getters...
// Mutations...

// Export
```
