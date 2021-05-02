<template>
  <div>
    <p
      v-for="i in 5"
     :key="i"
    >HELLO WORLD</p>
  </div>
</template>

<script>
import { mdiFire } from '@mdi/js'

export default {
  name: 'HelloWorld',

  data () {
    return {
      mdiFire
    }
  },

  mounted () {
    this.fetchBooks()
  },

  methods: {
    async fetchBooks () {
      await this.$axios.get('/books')
        .then(res => {
          if (res && res.data) {
            console.log(res.data)
          }
        })
    }
  }
}
</script>
