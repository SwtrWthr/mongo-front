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
          @click="$router.go(-1)"
          class="transparent-before"
        >
          {{ mdiChevronLeft }}
        </v-icon>
        Login
      </p>
      <v-form @submit.prevent="login">
        <v-text-field
          v-model="user.email"
          class="login__input mb-5"
          single-line
          outlined
          dense
          hide-details
          :prepend-inner-icon="mdiAccount"
          :disabled="loading"
          placeholder="e-mail"
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          class="login__input"
          single-line
          outlined
          type="password"
          dense
          hide-details
          placeholder="password"
          :prepend-inner-icon="mdiLock"
          :disabled="loading"
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
        <div v-else class="py-1"></div>
        <v-btn
          :ripple="false"
          type="submit"
          elevation="0"
          block
          color="#1EA896"
          :loading="loading"
          large
          class="text-none mt-5"
          style="color: white; font-weight: 500; font-size: 16px;border-radius: 10px"
        >
          Login
        </v-btn>
      </v-form>
      <p
        class="text-center mt-3 mb-0"
        style="font-weight: 500; font-size: 12px; color: #1EA896; cursor:pointer;"
        @click="$emit('change', 'registration-component')"
      >Sign up</p>
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
  name: 'LoginComponent',
  data() {
    return {
      mdiChevronLeft,
      mdiLock,
      mdiAccount,
      user: {
        email: '',
        password: ''
      },
      error: undefined,
      loading: false,
    }
  },
  methods: {
    async login() {
      this.loading = true
      this.error = ''
      await this.$axios.post('auth/login', this.user)
        .then(res => {
          if(res && res.data) {
            console.log(res.data)
            this.$store.dispatch('session/set', {
              token: res.data.token,
              user: res.data.user
            })
            this.$router.push({ name: 'Home' })
          }
        })
        .catch(err => {
          if(err && err.response && err.response.data) {
            console.log(err.response.data)
            this.error = err.response.data.message
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
.login__input {
  border-radius: 10px !important;
  margin-bottom: 20px !important;

  &:not(.v-input--is-focused, .error--text) {
    .v-input__slot {
      background-color: #EDF2F4 !important;
      fieldset {
        border: 2px solid #4C5454 !important;
      }
    }
  }
}
</style>
