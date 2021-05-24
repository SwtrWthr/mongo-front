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
        {{ author }}
        <span style="font-weight: 500">({{ year }})</span>
      </v-card-subtitle>
      <v-card-text class="pa-0">
        <v-chip-group
          row
        >
          <v-chip
            v-for="genre in genres"
            :key="genre._id"
            :ripple="false"
            outlined
            class="primary primary--text"
          >
            {{ genre.title }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-actions
        class="d-flex align-center justify-space-between"
      >
        <span class="font-weight-black" style="font-size: 22px">{{ price }}<b style="color: green">$</b></span>
        <v-btn
          v-if="includes !== undefined"
          :ripple="false"
          elevation="0"
          fab
          :outlined="!includes"
          class=" pa-3"
          :class="[ includes ? 'primary' : 'primary--text']"
          @click="addToFavourite"
        >
          <v-icon>
            {{ includes ? mdiHeart : mdiHeartOutline }}
          </v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </div>
</template>

<script>
import LazyImage from '@/assets/lazy-image.png'
import { mdiHeartOutline, mdiHeart } from '@mdi/js'

export default {
  name: 'ItemCard',
  props: {
    id: String,
    title: String,
    author: String,
    image: String,
    year: Number,
    price: Number,
    genres: Array,
    includes: Boolean,
  },
  data() {
    return {
      mdiHeartOutline,
      mdiHeart,
      LazyImage,
    }
  },
  methods: {
    addToFavourite() {
      this.$store.dispatch('session/addToFavourite', this.id)
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
