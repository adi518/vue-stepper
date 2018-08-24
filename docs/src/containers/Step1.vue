<template>
  <v-app-step :no-match="200">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    In euismod elementum ante ac volutpat. Suspendisse euismod est enim,
    sit amet vehicula neque feugiat id. Nunc imperdiet convallis placerat.
    Sed accumsan mauris et magna facilisis gravida. Suspendisse et justo volutpat,
    congue libero id, vehicula sem. Maecenas nec ex imperdiet, bibendum justo vel,
    feugiat velit. Vivamus eu maximus mi. Fusce ac metus magna.
  </v-app-step>
</template>

<script>
import VAppStep from './Step'

export default {
  name: 'app-step-1',
  components: {
    VAppStep
  }
}
</script>
