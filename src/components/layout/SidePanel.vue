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
        >
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

<style scoped>

</style>
