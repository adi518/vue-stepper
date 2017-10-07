```html
<template>
  <div id="app">
    <v-wizard :steps="steps" v-model="step" />
    <div v-if="step == 1">
      <p>
        <b>Eeny Content</b>
      </p>
      <p>...</p>
    </div>
    <div v-if="step == 2">
      <p>
        <b>Miny Content</b>
      </p>
      <p>...</p>
    </div>
    <div v-if="step == 3">
      <p>
        <b>Moe Content</b>
      </p>
      <p>...</p>
    </div>
  </div>
</template>
```
