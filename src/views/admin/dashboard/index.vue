<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <p class="font-weight-bold" style="font-size: 24px">Book availability</p>
        <div v-if="loading">
          <v-skeleton-loader class="ma-5" min-height="500" type="card"/>
        </div>
        <div v-else>
          <div
            style="background-color: white; border-radius: 20px; width: 450px"
            class="pa-4"
          >
            <book-chart :series="quantities" :categories="names"/>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <p class="font-weight-bold" style="font-size: 24px">Genre quantity</p>
        <div v-if="gen_loading">
          <v-skeleton-loader class="ma-5" min-height="500" type="card"/>
        </div>
        <div v-else>
          <div
            style="background-color: white; border-radius: 20px; width: 450px"
            class="pa-4"
          >
            <genre-chart :series="gen_quantities" :categories="gen_names"/>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BookChart from '@/components/admin/dashboard/BookChart'
import GenreChart from '@/components/admin/dashboard/GenreChart'

export default {
  name: 'AdminDashboardIndex',
  components: {
    GenreChart,
    BookChart
  },
  data () {
    return {
      names: undefined,
      gen_names: undefined,
      quantities: [],
      gen_quantities: [],
      loading: false,
      gen_loading: false,
    }
  },
  mounted () {
    this.fetchGenreQuantities()
    this.fetchBookQuantities()
  },
  methods: {
    async fetchBookQuantities () {
      this.loading = true
      await this.$axios.get(`dashboard/books `).then((res) => {
        if (res && res.data) {
          // console.log(res.data)
          this.names = res.data.names
          this.quantities[0] = {
            name: 'quantity',
            data: res.data.quantities,
          }
        }
      })
        .finally(() => {
          this.loading = false
        })
    },

    async fetchGenreQuantities () {
      this.gen_loading = true
      await this.$axios.get(`dashboard/genres`).then((res) => {
        if (res && res.data) {
          console.log(res.data)
          this.gen_names = res.data.genres
          this.gen_quantities[0] = {
            name: 'quantity',
            type: 'line',
            data: res.data.quantities,
          }
        }
      })
        .finally(() => {
          this.gen_loading = false
        })
    },
  },
}
</script>

<style scoped></style>
