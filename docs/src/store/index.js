import Vue from 'vue'
import Vuex from 'vuex'

import { Stepper } from 'vue-stepper-component'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stepper: new Stepper(3)
  },
  getters: {
    stepper: state => state.stepper
  },
  mutations: {
    stepper_model: (state, payload) => {
      state.stepper.model = payload
    }
  }
})

export default store

export const commit = store.commit
export const getters = store.getters
