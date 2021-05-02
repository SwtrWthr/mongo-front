<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ subtitle }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="$emit('update:dialog', false)"
        >
          Cancel
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="$emit('agree')"
        >
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  props: {
    dialog: Boolean,
    title: String,
    subtitle: String,
  },
}
</script>

<style scoped>

</style>
