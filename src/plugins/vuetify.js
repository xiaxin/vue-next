import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// css
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// toast
import ToastContainer from './toast/Container.vue'
import useToastStore from './toast/store'
import './toast/style.scss'

export default defineNuxtPlugin((nuxtApp) => {
    console.log('[plugins] [vuetify] [components]', components)
    console.log('[plugins] [vuetify] [directives]', directives)

    const vuetify = createVuetify({
        components,
        directives,

        ssr: true,
        locale: {
            defaultLocale: 'zhHans',
        },
    })

    nuxtApp.vueApp.use(vuetify)

    // vuetify toast
    nuxtApp.vueApp.use({
        install: (app) => {
            if (typeof window !== 'undefined') {
                window.$toast = useToastStore()
            }
        },
    })
    nuxtApp.vueApp.component('toast-container', ToastContainer)

    // vuetify request
})
