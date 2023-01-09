// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    // 自动加载
    imports: {
        dirs: [
            // ... or scan all modules within given directory
            // 'composables/**',
            'stores/**',
        ],
    },

    build: {
        transpile: ['vuetify'],
    },

    // css
    css: ['/assets/main.scss'],

    srcDir: 'src/',

    modules: [
        // pinia
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // 自动引入 `usePinia()`
                    'defineStore',
                    // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],
})
