<template>
  <div>
    <v-card
      flat
      style="border-radius: 30px; color: #4C5454"
      min-height="280"
      width="400"
      class="pa-10 mx-3 mx-sm-0"
    >
      <p style="font-size: 36px; font-weight: 700; line-height: 100%;position: relative" class="mb-10 d-flex align-center">
        <v-icon
          style="position:absolute;left: -30px"
          color="#1EA896"
          @click="$emit('change', 'login-component')"
          class="transparent-before"
        >
          {{ mdiChevronLeft }}
        </v-icon>
        Registration
      </p>
      <v-form @submit.prevent="register">
        <v-text-field
          v-model="user.email"
          class="login__input"
          single-line
          outlined
          dense
          hide-details
          placeholder="e-mail"
        ></v-text-field>
        <v-text-field
          v-model="user.first_name"
          class="login__input"
          single-line
          outlined
          dense
          hide-details
          placeholder="first name"
        ></v-text-field>
        <v-text-field
          v-model="user.last_name"
          class="login__input"
          single-line
          outlined
          dense
          hide-details
          placeholder="last name"
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          class="login__input"
          single-line
          outlined
          dense
          type="password"
          hide-details
          placeholder="password"
        ></v-text-field>
        <v-alert
          v-if="error"
          text
          style="border-radius: 10px"
          type="error"
          class="mb-0"
        >
          {{ error }}
        </v-alert>
        <v-btn
          :ripple="false"
          elevation="0"
          block
          type="submit"
          color="#1EA896"
          large
          class="text-none mt-10"
          style="color: white; font-weight: 500; font-size: 16px;border-radius: 10px"
        >
          Sign Up
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import {
  mdiChevronLeft,
  mdiLock,
  mdiAccount
} from '@mdi/js'

export default {
  name: 'RegistrationComponent',
  data() {
    return {
      error: '',
      mdiChevronLeft,
      mdiLock,
      mdiAccount,
      user: {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
      }
    }
  },

  methods: {
    async register() {
      await this.$axios.post(`auth/register`, this.user)
        .then(res => {
          if(res && res.data) {
            console.log(res.data)
            this.$emit('change', 'login-component')
          }
        })
        .catch(err => {
          if(err && err.response && err.response.data) {
            console.log(err.response.data)
            this.error = err.response.data.message
          }
        })
    }
  }
}
</script>

<style lang="scss">

</style>
