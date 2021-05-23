<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600"
  >
    <v-card>
      <form method="POST" @submit.prevent="createBook">
        <v-card-title>
          Add book
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
            >
              <div
                class="gradient-background"
              >
                <v-text-field
                  v-model="book.title"
                  solo
                  dense
                  hide-details
                  style="border-radius: 10px"
                  placeholder="title"
                  flat
                ></v-text-field>
              </div>
            </v-col>
            <v-col
              cols="12"
            >
              <div
                class="gradient-background"
              >
                <v-text-field
                  v-model="book.author"
                  solo
                  dense
                  hide-details
                  style="border-radius: 10px"
                  placeholder="author"
                  flat
                ></v-text-field>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <div
                class="gradient-background"
              >
                <v-text-field
                  v-model="book.year"
                  solo
                  dense
                  type="number"
                  hide-details
                  style="border-radius: 10px"
                  placeholder="year"
                  flat
                ></v-text-field>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <div
                class="gradient-background"
              >
                <v-text-field
                  v-model="book.isbn"
                  solo
                  dense
                  hide-details
                  style="border-radius: 10px"
                  placeholder="isbn"
                  flat
                ></v-text-field>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <div
                class="gradient-background"
              >
                <v-text-field
                  v-model="book.price"
                  solo
                  dense
                  type="number"
                  hide-details
                  style="border-radius: 10px"
                  placeholder="price"
                  flat
                ></v-text-field>
              </div>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <div
                class="gradient-background"
              >
                <v-text-field
                  v-model="book.quantity"
                  solo
                  type="number"
                  dense
                  hide-details
                  style="border-radius: 10px"
                  placeholder="quantity"
                  flat
                ></v-text-field>
              </div>
            </v-col>
            <v-col
              cols="12"
            >
              <div
                class="gradient-background"
              >
                <v-file-input
                  v-model="book.image"
                  class="book-image__input"
                  label="upload image"
                  solo
                  dense
                  dark
                  hide-details
                  flat
                  background-color="white"
                  :prepend-icon="mdiImage"
                  style="border-radius: 10px"
                  accept="image/png, image/jpeg"
                >
                </v-file-input>
              </div>
            </v-col>
            <v-col cols="12">
              <div v-if="genres && genres.length > 0">
                <p style="color: black; font-weight: 500; font-size: 18px" class="mb-1 ml-1">genres</p>
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
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions
          class="justify-space-between pa-6"
        >
          <v-btn
            elevation="0"
            class="text-none error--text"
            color="white"
            large
            @click="$emit('update:dialog', false)"
            :ripple="false"
          >
            cancel
          </v-btn>
          <v-btn
            elevation="0"
            style="color: white;background: linear-gradient(332deg, rgba(30,168,150,1) 0%, rgba(116,152,170,1) 72%, rgba(52,138,167,1) 95%);"
            class="text-none"
            large
            type="submit"
            :ripple="false"
            :loading="disabled_btn"
            :disabled="disabled_btn"
          >
            create
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiImage } from '@mdi/js'

export default {
  name: 'BookDialogAdd',
  props: {
    dialog: Boolean,
    genres: Array
  },
  data () {
    return {
      mdiImage,
      disabled_btn: false,
      book: {
        title: '',
        author: '',
        isbn: '',
        price: '',
        year: '',
        quantity: '',
        image: []
      },
      selected_genres: []
    }
  },
  methods: {
    async createBook () {
      this.disabled_btn = true
      let fd = new FormData()
      fd.append('title', this.book.title)
      fd.append('author', this.book.author)
      fd.append('isbn', this.book.isbn)
      fd.append('price', this.book.price)
      fd.append('year', this.book.year)
      fd.append('quantity', this.book.quantity)
      fd.append('image', this.book.image)
      if (this.selected_genres.length > 0)
        this.selected_genres.forEach(genre => fd.append('genres[]', genre))
      await this.$axios.post('books', fd)
        .then(res => {
          if (res && res.data) {
            console.log(res.data)
            this.$emit('created')
          }
        })
        .finally(() => {
          this.disabled_btn = false
        })
    }
  }
}
</script>

<style lang="scss">
.gradient-background {
  border-radius: 12px;
  padding: 3px;
  background: linear-gradient(332deg, rgba(30, 168, 150, 1) 0%, rgba(116, 152, 170, 1) 72%, rgba(52, 138, 167, 1) 95%);
}

.book-image__input {
  .v-input__prepend-outer {
    margin-left: 6px;
  }

  & .v-file-input__text, label {
    color: darkgray !important;
  }
}

.genres__chip--active {
  color: white !important;
  background: linear-gradient(332deg, rgba(30, 168, 150, 1) 0%, rgba(116, 152, 170, 1) 72%, rgba(52, 138, 167, 1) 95%) !important;
}
</style>
