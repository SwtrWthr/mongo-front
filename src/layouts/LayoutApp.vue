<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndUp"
      app
      color="#EFF1F3"
      width="80"
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
      class="app-bar"
      hide-on-scroll
    >
      <navigation-bar/>
    </v-app-bar>
    <v-main>
      <v-container
        fluid
        class="pa-4 pt-0 pl-sm-1 pl-4"
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
import NavigationBar from '@/components/layout/NavigationBar'
export default {
  name: 'LayoutApp',
  components: { NavigationBar, SidePanel }
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

.app-bar {
  .v-toolbar__content {
    padding-left: 4px;
  }
}

@media (max-width: 600px) {
  .app-bar {
    .v-toolbar__content {
      padding-left: 20px;
    }
  }
}
</style>
