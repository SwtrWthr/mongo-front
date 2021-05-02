<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndUp"
      app
      color="#EFF1F3"
      width="120"
      class="side-panel"
      permanent
      floating
    >
      <side-panel></side-panel>
    </v-navigation-drawer>
    <v-app-bar
      app
      flat
      height="60"
      color="#EFF1F3"
    >

    </v-app-bar>
    <v-main>
      <v-container
        fluid
        class="pa-4 pt-0 pl-1"
        style="height: 100%"
      >
        <div class="main">
          <slot/>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidePanel from '../components/layout/SidePanel'
export default {
  name: 'LayoutApp',
  components: { SidePanel }
}
</script>

<style lang="scss">
.main {
  background-color: #f8f8f8;
  min-height: 100%;
  border-radius: 20px;
  padding: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>
