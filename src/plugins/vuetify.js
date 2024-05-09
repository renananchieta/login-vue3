/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VCalendar } from 'vuetify/labs/VCalendar'

// Composables
import { createVuetify} from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const temaPadraoEscuro = {
  dark: true,
  colors: {
      background: '#565454',
      //     surface: '#FFFFFF',
      primary: '#FFEA00',
      botao: '#FFEA00',
      // secondary: '#03DAC6',
      //     'secondary-darken-1': '#018786',
      // error: '#B00020',
      // info: '#2196F3',
      // success: '#4CAF50',
      // warning: '#FB8C00',
      //       'cor-menu-background': '#424242',
      //       'cor-card-background': '#424242',

  }
}

const temaPadraoClaro = {
  dark: false,
  colors: {
      background: '#ECEFF1',
      // surface: '#EFEBE9',
      primary: '#FFEA00',
      botao: '#3700B3',
      //     'primary-darken-1': '#3700B3',
      //     secondary: '#03DAC6',
      //     'secondary-darken-1': '#018786',
      //     error: '#B00020',
      //     info: '#2196F3',
      //     success: '#4CAF50',
      //     warning: '#FB8C00',
      //       'cor-menu-background': '#EFEBE9',
      //       'cor-card-background': '#EFEBE9',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'temaPadraoEscuro',
    themes: {
        temaPadraoEscuro,
        temaPadraoClaro,
    },
},
  components: {
    VCalendar,
  },
})
