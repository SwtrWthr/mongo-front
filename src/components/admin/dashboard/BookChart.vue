<template>
  <div>
    <apex-charts
      width="400"
      type="bar"
      :options="options"
      :series="series"
    />
  </div>
</template>

<script>
import ApexCharts from 'vue-apexcharts'

export default {
  name: 'BookChart',
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
          id: 'book-quantities'
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
