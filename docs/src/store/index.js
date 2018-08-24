import Vue from 'vue'
import Vuex from 'vuex'

import { Stepper } from 'vue-stepper-component'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    stepper: {
      state: new Stepper(3, { step: 1, linear: true }),
      getters: {
        stepper: state => state
      },
      mutations: {
        SET: (state, payload) => {
          state.model = payload
        },
        SET_STEP: (state, payload) => {
          state.model.step = payload
        }
      },
      actions: {
        SET: ({ commit }, payload) => {
          commit('SET', payload)
        },
        SET_STEP: ({ commit }, payload) => {
          commit('SET_STEP', payload)
        }
      }
    }
  }
})

export default store

export const getters = store.getters
export const dispatch = store.dispatch
