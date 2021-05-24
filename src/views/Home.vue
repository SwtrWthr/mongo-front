<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-4">
      <p style="font-size: 30px; font-weight: 700" class="mb-0">
        Books
      </p>
      <FilterIcon
        @click="show_filters = !show_filters"
        style="cursor:pointer;"
      />
    </div>
    <FilterCard
      :visible="show_filters"
      :genres="genres"
      @filter="(gen) => {
        filterBooks(gen)
      }"
    />
    <div v-if="loading"
      class="d-flex flex-wrap align-center"
      style="gap: 30px;"
    >
      <v-skeleton-loader
        v-for="i in 4"
        :key="i"
        type="card"
        width="260"
      />
    </div>
    <div
      v-else-if="books && books.length > 0"
      class="d-flex flex-wrap align-center"
      style="gap: 30px;"
    >
      <ItemCard
        v-for="book in books"
        :key="book._id"
        :id="book._id"
        :title="book.title"
        :author="book.author"
        :image="book.image"
        :price="book.price"
        :year="book.year"
        :genres="book.genres"
        :includes="user && user.favourite_books.includes(book._id)"
      />
    </div>
    <div
      v-else
      class="text-center"
      style="font-size: 28px; font-weight: 600"
    >
      <p>Ooops! No books found...</p>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/home/ItemCard'
import FilterIcon from '@/assets/svg/filter.svg'
import FilterCard from '@/components/home/FilterCard'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    FilterCard,
    ItemCard,
    FilterIcon,
  },
  data() {
    return {
      loading: false,
      books: undefined,
      genres: undefined,
      search: '',
      show_filters: false,
    }
  },
  mounted () {
    this.fetchBooks()
    this.fetchGenres()
  },
  computed: {
    ...mapState('session', ['user'])
  },
  methods: {
    async fetchBooks() {
      this.loading = true
      await this.$axios.get('books')
        .then(res => {
          if(res && res.data) {
            this.books = res.data
          }
        })
        .finally(() => {
          this.loading = false
        })
    },

    async fetchGenres() {
      await this.$axios.get('genres')
        .then(res => {
          if(res && res.data) {
            this.genres = res.data
          }
        })
    },

    async filterBooks(selected_genres) {
      this.loading = true
      await this.$axios.post('books/filter', {
        genres: selected_genres
      }).then(res => {
        if(res && res.data) {
          console.log(res.data)
          this.books = res.data
        }
      }).finally(() => {
        this.loading = false
      })
    },
  }
}
</script>
