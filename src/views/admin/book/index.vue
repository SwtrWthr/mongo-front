<template>
  <div>
    <p class="font-weight-bold d-flex justify-space-between align-center" style="font-size: 28px">
      Books
      <v-btn
        icon
        tile
        :ripple="false"
        class="thin-bordered"
        @click="add_dialog = true"
      >
        <v-icon color="black">
          {{ mdiPlus }}
        </v-icon>
      </v-btn>
    </p>
    <books-table
      :loading="loading"
      :books="books"
      @refresh="fetchBooks"
    />
    <book-dialog-add
      :dialog.sync="add_dialog"
      @created="() => {
        this.add_dialog = false
        this.fetchBooks()
      }"
    />
  </div>
</template>

<script>
import { mdiBookmark, mdiPlus } from '@mdi/js'
import BooksTable from '../../../components/admin/book/BooksTable'
import BookDialogAdd from '@/components/admin/book/BookDialogAdd'

export default {
  name: 'AdminBookIndex',
  components: { BookDialogAdd, BooksTable },
  data () {
    return {
      mdiPlus,
      mdiBookmark,
      add_dialog: false,
      books: undefined,
      loading: false,
    }
  },
  mounted () {
    this.fetchBooks()
      .finally(() => {
        this.loading = false
      })
  },
  methods: {
    async fetchBooks () {
      this.loading = true
      await this.$axios.get('books')
        .then(res => {
          if (res && res.data) {
            this.books = res.data
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
  }
}
</script>
