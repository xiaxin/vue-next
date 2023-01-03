const whiteList = ['/login']

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.fullPath.substring(1, 5) == '4') {
        return
    }
    console.log('[middleware/auth]', '[from]', from)
    console.log('[middleware/auth]', '[to]', to)
    let { token } = useSessionStore()
    const { path, fullPath } = to

    token = 'test'

    if (whiteList.includes(path)) {
        return
    }

    if (token) {
        if (to.path === '/login') {
            return navigateTo(`/`)
        }
        try {
        } catch (error) {}
    } else if (!whiteList.includes(path)) {
        return navigateTo(`/login?redirect=${fullPath}`)
    }
})
