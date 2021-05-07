<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="books"
      hide-default-footer
      :loading="loading"
      style="background-color: #f8f8f8"
      class="books__table"
    >
      <template v-slot:item.index="{ item }">
        <span style="font-size: 16px; font-weight: 400">{{ books.indexOf(item) + 1 }}</span>
      </template>
      <template v-slot:item.title="{item}">
        <p class="d-flex align-center mb-0">
          <v-img
            v-if="item.image"
            :src="item.image"
            :lazy-src="LazyImage"
            max-width="40"
            height="70"
            class="mr-4 my-4"
          >
          </v-img>
          <span style="font-size: 16px; font-weight: 500">
            {{item.title}}
          </span>
        </p>
      </template>
      <template v-slot:item.price="{item}">
        <span style="font-weight: 500; font-size: 15px">{{ item.price }}</span>
        <span style="color: green; font-weight: 900;font-size: 16px">$</span>
      </template>
      <template v-slot:item.actions="{item}">
      <span>
        <v-icon
          class="warning--text mr-2"
          size="20"
          @click="openEditDialog(item)"
        >
          {{ mdiLeadPencil }}
        </v-icon>
        <v-icon
          class="error--text"
          size="20"
          @click="openDeleteDialog(item._id)"
        >
          {{ mdiDelete }}
        </v-icon>
      </span>
      </template>
    </v-data-table>

    <confirm-dialog
      :dialog.sync="delete_dialog"
      :title="'Delete item'"
      :subtitle="'Do you really want to delete this item?'"
      @agree="deleteBook(selected_item_id)"
    />

    <book-dialog-edit
      v-if="selected_item"
      :dialog.sync="edit_dialog"
      :book_prop="selected_item"
      @updated="() => {
        this.edit_dialog = false
        this.$emit('refresh')
      }"
    />
  </div>
</template>

<script>
import { mdiLeadPencil, mdiDelete } from '@mdi/js'
import ConfirmDialog from '@/components/ConfirmDialog'
import LazyImage from '@/assets/lazy-image.png'
import BookDialogEdit from '@/components/admin/book/BookDialogEdit'

export default {
  name: 'BooksTable',
  components: { BookDialogEdit, ConfirmDialog },
  props: {
    books: Array,
    loading: Boolean,
  },
  data () {
    return {
      LazyImage,
      mdiDelete,
      mdiLeadPencil,
      delete_dialog: false,
      edit_dialog: false,
      selected_item_id: undefined,
      selected_item: undefined,
      headers: [
        {
          text: '#',
          align: 'start',
          value: 'index',
        },
        {
          text: 'title',
          value: 'title'
        },
        {
          text: 'author',
          value: 'author'
        },
        {
          text: 'year',
          value: 'year',
        },
        {
          text: 'isbn',
          value: 'isbn',
        },
        {
          text: 'price',
          value: 'price',
          align: 'end'
        },
        {
          text: 'amount',
          value: 'quantity',
          align: 'end'
        },
        {
          text: 'actions',
          value: 'actions',
          align: 'end'
        },
      ],
    }
  },
  methods: {
    openDeleteDialog (id) {
      this.selected_item_id = id
      this.delete_dialog = true
    },

    openEditDialog (item) {
      this.selected_item = item
      this.edit_dialog = true
    },

    async deleteBook (id) {
      await this.$axios.delete(`book/${id}`)
        .then(res => {
          if (res && res.data) {
            console.log(res.data)
            this.delete_dialog = false
            this.$emit('refresh')
          }
        })
    }
  }
}
</script>

<style lang="scss">
.books__table {
  margin-bottom: 10px;

  tbody {
    td {
      font-size: 15px !important;
    }
    tr:hover {
      box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
  }
}
</style>
