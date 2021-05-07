<template>
  <div
    style="height: 100%"
    class="d-flex justify-center"
  >
    <v-list
      rounded
      class="my-auto"
      dense
    >
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          exact
          v-for="(item, i) in items"
          :key="i"
          class="px-2"
          :to="{
            name: item.path
          }"
          :ripple="false"
        >
          <div class="nav-bar-item--active"></div>
          <v-list-item-icon class="mx-auto">
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mdiBookshelf, mdiHome, mdiChartLine } from '@mdi/js'

export default {
  name: 'SidePanel',
  data () {
    return {
      selectedItem: 0,
      items: [
        {
          path: 'Home',
          icon: mdiHome
        },
        {
          path: 'AdminBookIndex',
          icon: mdiBookshelf
        },
        {
          path: 'AdminDashboard',
          icon: mdiChartLine
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.v-list-item--active {
  .nav-bar-item--active {
    background-color: #1EA896;
    width: 10px;
    height: 35px;
    border-radius: 10px;
    position: absolute;
    left: -25px;
  }

  &:before {
    background-color: transparent !important;
  }
}
</style>
