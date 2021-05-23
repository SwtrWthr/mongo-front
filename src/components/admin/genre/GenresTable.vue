<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="genres"
      hide-default-footer
      :loading="loading"
      style="background-color: #f8f8f8"
    >
      <template v-slot:item.index="{ item }">
        <span style="font-size: 16px; font-weight: 400">{{ genres.indexOf(item) + 1 }}</span>
      </template>
      <template v-slot:item.actions="{item}">
        <span>
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

    <ConfirmDialog
      :dialog.sync="delete_dialog"
      :title="'Delete item'"
      :subtitle="'Do you really want to delete this item?'"
      @agree="deleteGenre(selected_item_id)"
    />
  </div>
</template>

<script>
import { mdiDelete } from '@mdi/js'
import ConfirmDialog from '@/components/ConfirmDialog'

export default {
  name: 'GenresTable',
  components: { ConfirmDialog },
  props: {
    genres: Array,
    loading: Boolean,
  },
  data () {
    return {
      mdiDelete,
      selected_item_id: undefined,
      delete_dialog: false,
      headers: [
        {
          text: '#',
          align: 'start',
          value: 'index',
          width: '1px'
        },
        {
          text: 'title',
          value: 'title'
        },
        {
          text: '',
          value: 'actions',
          align: 'end'
        }
      ],
    }
  },
  methods: {
    openDeleteDialog (id) {
      this.selected_item_id = id
      this.delete_dialog = true
    },

    async deleteGenre (id) {
      await this.$axios.delete(`genres/${id}`)
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

<style scoped>

</style>
