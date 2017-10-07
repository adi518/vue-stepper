```html
<template>
  <div id="app">
    <v-wizard ref="wizard" :steps="steps" v-model="step" />
    <!-- Steps View Logic -->
    <button type="button" @click="$refs.wizard.previous">
    <button type="button" @click="$refs.wizard.next">
    <button type="button" @click="$refs.wizard.reset">
  </div>
</template>
```
