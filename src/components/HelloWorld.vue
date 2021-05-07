<template>
  <div>
    <p
      v-for="i in 5"
     :key="i"
    >HELLO WORLD</p>
  </div>
</template>

<script>
import { mdiFire } from '@mdi/js'

export default {
  name: 'HelloWorld',

  data () {
    return {
      mdiFire
    }
  },
}
</script>
