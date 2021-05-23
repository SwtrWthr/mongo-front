<template>
  <div>
    <div>
      <p class="font-weight-bold d-flex justify-space-between align-center" style="font-size: 28px">
        Genres
        <v-btn
          icon
          tile
          :ripple="false"
          class="thin-bordered"
          @click="genre_add_dialog = true"
        >
          <v-icon color="black">
            {{ mdiPlus }}
          </v-icon>
        </v-btn>
      </p>
      <GenresTable
        :loading="genres_loading"
        :genres="genres"
        @refresh="fetchGenres"
      />
      <ModalGenreAdd
        :dialog.sync="genre_add_dialog"
        @created="() => {
          this.genre_add_dialog = false
          this.fetchGenres()
        }"
      />
    </div>
    <v-img :src="Rainbow" class="my-10"/>
    <div>
      <p class="font-weight-bold d-flex justify-space-between align-center" style="font-size: 28px">
        Books
        <v-btn
          icon
          tile
          :ripple="false"
          class="thin-bordered"
          @click="book_add_dialog = true"
        >
          <v-icon color="black">
            {{ mdiPlus }}
          </v-icon>
        </v-btn>
      </p>
      <books-table
        :loading="books_loading"
        :books="books"
        :genres="genres"
        @refresh="fetchBooks"
      />
      <book-dialog-add
        :dialog.sync="book_add_dialog"
        :genres="genres"
        @created="() => {
        this.book_add_dialog = false
        this.fetchBooks()
      }"
      />
    </div>
  </div>
</template>

<script>
import { mdiBookmark, mdiPlus } from '@mdi/js'
import Rainbow from '@/assets/gif/rainbow.gif'
import BooksTable from '@/components/admin/book/BooksTable'
import BookDialogAdd from '@/components/admin/book/BookDialogAdd'
import GenresTable from '@/components/admin/genre/GenresTable'
import ModalGenreAdd from '@/components/admin/genre/ModalGenreAdd'

export default {
  name: 'AdminIndex',
  components: { ModalGenreAdd, GenresTable, BookDialogAdd, BooksTable },
  data () {
    return {
      mdiPlus,
      mdiBookmark,
      Rainbow,
      book_add_dialog: false,
      genre_add_dialog: false,
      books: undefined,
      books_loading: false,
      genres: undefined,
      genres_loading: false,
    }
  },
  mounted () {
    this.fetchGenres()
    this.fetchBooks()
  },
  methods: {
    async fetchBooks () {
      this.books_loading = true
      await this.$axios.get('books')
        .then(res => {
          if (res && res.data) {
            this.books = res.data
          }
        })
        .finally(() => {
          this.books_loading = false
        })
    },

    async fetchGenres() {
      this.genres_loading = true
      await this.$axios.get('genres')
        .then(res => {
          if(res && res.data) {
            this.genres = res.data
          }
        })
        .finally(() => {
          this.genres_loading = false
        })
    }
  }
}
</script>
