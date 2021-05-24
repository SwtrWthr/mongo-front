<template>
  <div class="d-flex justify-space-between align-center flex-wrap-reverse" style="width: 100%; height: 100%">
    <div class="d-flex align-center justify-start" style="width: 300px;">
      <SearchIcon
        class="ml-6 gray-icon"
      />
      <input
        type="text"
        class="navigation-bar__input"
        placeholder="search..">
    </div>
    <div class="mr-6">
      <v-badge
        v-if="user"
        :content="user.favourite_books && user.favourite_books.length"
        :value="user.favourite_books && user.favourite_books.length"
        color="primary"
        overlap
        class="mr-6"
      >
        <v-icon
          color="black"
          size="28"
        >
          {{ mdiHeart }}
        </v-icon>
      </v-badge>
      <span
        v-if="user"
        class="logout__span"
        @click="logout"
      >
        {{ `${user.first_name || ''} ${user.last_name || ''}` }}
        <v-icon
          v-if="user"
          color="black"
        >
        {{ mdiLocationExit }}
      </v-icon>
      </span>
      <router-link
        v-else
        style="font-size: 16px; font-weight: 600"
        class="mr-2 navigation-bar__link"
        :to="{
          name: 'Login'
        }"
      >
        Sign In
      </router-link>
    </div>
  </div>
</template>

<script>
import SearchIcon from '@/assets/svg/search.svg'
import { mdiLocationExit, mdiHeart } from '@mdi/js'
import { mapState } from 'vuex'

export default {
  name: 'NavigationBar',
  components: {
    SearchIcon
  },
  data() {
    return {
      mdiLocationExit,
      mdiHeart,
    }
  },
  computed: {
    ...mapState('session', ['user'])
  },
  methods: {
    logout() {
      this.$store.dispatch('session/delete')
    }
  }
}
</script>

<style lang="scss">
.gray-icon {
  z-index: 1;
  path {
    fill: #6b6c6d;
  }
}

.navigation-bar__link {
  color: black !important;
  text-decoration: none;

  &:hover {
    color: #1EA896 !important;
  }
}

.navigation-bar__input {
  outline: none;
  width: 250px;
  padding: 5px 5px 5px 35px;
  left: 20px;
  position: absolute;
  border-radius: 25px;
  transition: background-color 0.6s;

  &:focus {
    background-color: white;
  }
}

.logout__span {
  font-size: 16px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: #1EA896;

    .v-icon__svg {
      fill: #1EA896;
    }
  }
}
</style>
