<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600"
  >
    <v-card>
      <form method="POST" @submit.prevent="createGenre">
        <v-card-title>
          add genre
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
                  v-model="title"
                  solo
                  dense
                  hide-details
                  style="border-radius: 10px"
                  placeholder="title"
                  flat
                ></v-text-field>
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
  name: 'ModalGenreAdd',
  props: {
    dialog: Boolean,
  },
  data () {
    return {
      mdiImage,
      disabled_btn: false,
      title: undefined,
    }
  },
  methods: {
    async createGenre () {
      this.disabled_btn = true
      await this.$axios.post('genres', {
        title: this.title
      })
        .then(res => {
          if (res && res.data) {
            console.log(res.data)
            this.title = ''
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

</style>
