```html
<v-stepper :steps="steps" v-model="step"></v-stepper>

<template v-if="step === 1"><!-- Step 1 Content --></template>
<template v-if="step === 2"><!-- Step 2 Content --></template>
<template v-if="step === 3"><!-- Step 3 Content --></template>

<!-- etc' -->
```
