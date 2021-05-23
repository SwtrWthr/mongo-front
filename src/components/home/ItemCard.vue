<template>
  <div
    class="pa-5 item__card"
  >
    <v-img
      :lazy-src="LazyImage"
      :src="image"
      height="250"
      width="160"
      class="mx-auto"
    />
    <div class="align-self-end">
      <v-card-title class="px-0 text-truncate">
        {{ title }}
      </v-card-title>
      <v-card-subtitle class="px-0 text-truncate">
        {{ `${author} (${year})` }}
      </v-card-subtitle>
      <v-card-actions
        class="d-flex align-center justify-space-between"
      >
        <span class="font-weight-black" style="font-size: 22px">{{ price }}<b style="color: green">$</b></span>
        <v-btn
          :ripple="false"
          elevation="0"
          class="primary text-none pa-3"
          style="border-radius: 10px"
        >
          Add to
          <v-icon>
            {{ mdiCartOutline }}
          </v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </div>
</template>

<script>
import LazyImage from '@/assets/lazy-image.png'
import { mdiCartOutline } from '@mdi/js'

export default {
  name: 'ItemCard',
  props: {
    title: String,
    author: String,
    image: String,
    year: Number,
    price: Number,
  },
  data() {
    return {
      mdiCartOutline,
      LazyImage,
    }
  }
}
</script>

<style lang="scss">
.item__card {
  box-shadow: none;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  border-radius: 20px;
  background-color: white;
  flex: 0 1 23%;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    transform: translateY(-5px);
  }
}
</style>
