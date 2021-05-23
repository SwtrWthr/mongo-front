<template>
  <div
    class="filter__card"
    :class="{ 'visible': visible }"
  >
    <div>
      <p style="font-size: 18px; font-weight: 500" class="mb-0">genres</p>
      <v-chip-group
        multiple
        v-model="selected_genres"
      >
        <v-chip
          v-for="genre in genres"
          :key="genre._id"
          :ripple="false"
          :value="genre._id"
          outlined
          active-class="genres__chip--active"
        >
          {{ genre.title }}
        </v-chip>
      </v-chip-group>
    </div>
    <div class="text-center mt-6">
      <v-btn
        color="primary"
        elevation="0"
        :ripple="false"
        class="text-none"
        @click="$emit('filter', selected_genres)"
      >
        search
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterCard',
  props: {
    visible: Boolean,
    genres: Array,
  },
  data() {
    return {
      selected_genres: []
    }
  },
}
</script>

<style lang="scss">
.filter__card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  opacity: 0;
  height: 0;
  transition: height 1s ease-out, opacity 0.1s linear, padding 0.4s;

  &.visible {
    opacity: 1;
    height: auto;
    padding: 30px;
    margin-bottom: 30px;
  }
}

.genres__chip--active {
  color: white !important;
  background: linear-gradient(332deg, rgba(30, 168, 150, 1) 0%, rgba(116, 152, 170, 1) 72%, rgba(52, 138, 167, 1) 95%) !important;
}
</style>
