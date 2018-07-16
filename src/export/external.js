import Step from '@/components/Step'
import Stepper from '@/components/Stepper'
import StepperRoot from '@/components/StepperRoot'

export { default as Step } from '@/components/Step'
export { default as Stepper } from '@/components/Stepper'
export { default as StepperRoot } from '@/components/StepperRoot'

export const Install = {
  install(Vue) {
    Vue.component(Step.name, Step)
    Vue.component(Stepper.name, Stepper)
    Vue.component(StepperRoot.name, StepperRoot)
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
