import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    steps: 3,
    stepsMap: new Map([
      [1, { route: { name: 'step-1' } }],
      [2, { route: { name: 'step-2' } }],
      [3, { route: { name: 'step-3' } }]
    ])
  }
})
