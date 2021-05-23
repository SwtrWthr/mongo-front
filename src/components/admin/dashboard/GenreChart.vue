<template>
  <div>
    <apex-charts
      width="400"
      type="line"
      :options="options"
      :series="series"
    />
  </div>
</template>

<script>
import ApexCharts from 'vue-apexcharts'

export default {
  name: 'GenreChart',
  components: {
    ApexCharts,
  },
  props: {
    series: Array,
    categories: Array,
  },
  data () {
    return {
      options: {
        chart: {
          id: 'genre-quantities'
        },
        xaxis: {
          categories: this.categories || []
        },
      },
    }
  }
}
</script>

<style scoped>

</style>
