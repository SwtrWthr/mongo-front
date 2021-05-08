<template>
  <div
    class="pa-5 item__card"
  >
    <v-img
      :lazy-src="LazyImage"
      :src="image"
      max-height="250"
      width="140"
      contain
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
  min-width: 230px;

  &:hover {
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    transform: translateY(-5px) translateX(-5px);
  }
}
</style>
