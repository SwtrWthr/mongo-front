<template>
  <component :is="checkLayout">
    <router-view></router-view>
  </component>
</template>

<script>
import LayoutApp from './layouts/LayoutApp'
import LayoutEmpty from './layouts/LayoutEmpty'

export default {
  name: 'App',
  computed: {
    checkLayout() {
      if(this.$route.meta.useEmptyLayout) {
        return LayoutEmpty
      } else {
        return LayoutApp
      }
    }
  }
}
</script>
