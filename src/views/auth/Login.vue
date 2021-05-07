<template>
  <div class="login__div">
    <transition name="component-fade" mode="out-in">
      <component
        :is="component"
        @change="(c) => {
          this.component = c
        }"
      ></component>
    </transition>
  </div>
</template>

<script>
import LoginComponent from '@/components/Auth/Login'
import RegistrationComponent from '@/components/Auth/Registration'

export default {
  name: 'Login',
  components: {
    LoginComponent,
    RegistrationComponent,
  },
  data() {
    return {
      component: 'login-component',
    }
  }
}
</script>

<style lang="scss">
.transparent-before {
  &:after {
    background-color: transparent !important;
  }
}

.login__div {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
