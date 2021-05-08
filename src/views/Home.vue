<template>
  <div
    class="d-flex flex-wrap align-center"
    style="gap: 30px"
  >
    <item-card
      v-for="book in books"
      :key="book.id"
      :title="book.title"
      :author="book.author"
      :image="book.image"
      :price="book.price"
      :year="book.year"
    />
  </div>
</template>

<script>
import ItemCard from '../components/home/ItemCard'

export default {
  name: 'Home',
  components: {
    ItemCard
  },
  data() {
    return {
      books: undefined,
      search: ''
    }
  },
  mounted () {
    this.fetchBooks()
  },
  methods: {
    async fetchBooks() {
      await this.$axios.get('books')
        .then(res => {
          if(res && res.data) {
            console.log(res.data)
            this.books = res.data
          }
        })
    }
  }
}
</script>
