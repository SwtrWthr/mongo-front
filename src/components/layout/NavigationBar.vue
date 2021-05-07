<template>
  <div class="d-flex justify-space-between align-center flex-wrap-reverse" style="width: 100%; height: 100%">
    <div class="d-flex align-center justify-start" style="width: 300px;">
      <SearchIcon
        class="ml-1 gray-icon"
      />
      <input
        type="text"
        class="navigation-bar__input"
        placeholder="search..">
    </div>
    <router-link
      style="font-size: 16px; font-weight: 600"
      class="mr-6 navigation-bar__link"
      :to="{
        name: 'Login'
      }"
    >
      Sign Up
    </router-link>
  </div>
</template>

<script>
import SearchIcon from '@/assets/svg/search.svg'

export default {
  name: 'NavigationBar',
  components: {
    SearchIcon
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
  left: 0;
  position: absolute;
  border-radius: 25px;
  transition: background-color 0.6s;

  &:focus {
    background-color: white;
  }
}
</style>
