import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#1EA896',
        secondary: '#424242',
        accent: '#A0CED9',
        error: '#FF715B',
        info: '#348AA7',
        success: '#00CC66',
        warning: '#F1C40F'
      }
    }
  },
  icons: {
    iconfont: 'mdiSvg'
  }
})
