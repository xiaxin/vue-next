import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// css
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

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
})
