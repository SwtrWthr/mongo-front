<template>
  <div>
    <v-skeleton-loader
      v-if="loading"
      type="card"
    />
    <book-chart
      v-else
      :series="quantities"
      :categories="names"
    />
  </div>
</template>

<script>
import BookChart from '@/components/admin/dashboard/BookChart'
export default {
  name: 'AdminDashboardIndex',
  components: { BookChart },
  data() {
    return {
      names: undefined,
      quantities: [],
      loading: false,
    }
  },
  mounted () {
    this.fetchBookQuantities()
      .finally(() => {
        this.loading = false
      })
  },
  methods: {
    async fetchBookQuantities() {
      this.loading = true
      await this.$axios.get(`books/quantities`)
        .then(res => {
          if(res && res.data) {
            // console.log(res.data)
            this.names = res.data.names
            this.quantities[0] = {
              name: 'quantity',
              data: res.data.quantities
            }
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
