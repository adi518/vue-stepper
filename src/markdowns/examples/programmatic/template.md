```html
<v-stepper ref="stepper" :steps="steps" v-model="step"></v-stepper>

<button type="button" @click="$refs.stepper.previous()">Previous</button>
<button type="button" @click="$refs.stepper.next()">Next</button>
<button type="button" @click="$refs.stepper.reset()">Reset</button>
```
