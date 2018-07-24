import Step from '@/components/Step'
import Stepper from '@/components/Stepper'
import Utils from '@/modules/Stepper.Utils'

export { default as Stepper } from '@/modules/Stepper'
export { default as Utils } from '@/modules/Stepper.Utils'

export { default as VStep } from '@/components/Step'
export { default as VStepper } from '@/components/Stepper'
export { default as VStepBare } from '@/components/Step.bare'
export { default as VStepperContainer } from '@/components/Stepper.container'

export const Model = Utils.Model

export const Install = {
  install(Vue) {
    Vue.component(Step.name, Step)
    Vue.component(Stepper.name, Stepper)
  }
}

// Auto-install (Window/Node)
let GlobalVue
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(Install)
}

export default Stepper
