// element-plus
import ElementPlus from 'element-plus'

// i18n
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// css
import 'element-plus/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    console.log('[plugins] [element-plus] [info]', ElementPlus)

    nuxtApp.vueApp.use(ElementPlus, {
        size: 'default',
        locale: zhCn,
    })
})
