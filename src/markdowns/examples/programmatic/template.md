```html
<template>
  <div id="app">
    <v-stepper ref="stepper" :steps="steps" v-model="step" />
    <!-- Steps View Logic -->
    <button type="button" @click="$refs.stepper.previous">
    <button type="button" @click="$refs.stepper.next">
    <button type="button" @click="$refs.stepper.reset">
  </div>
</template>
```
