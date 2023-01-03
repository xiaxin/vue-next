import 'echarts'

import VChart, { THEME_KEY } from 'vue-echarts'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('v-chart', VChart)
})
