<template>
    <common-menu :title="name" :items="items" open-on-hover />
</template>

<script setup>
let name = '用户名称'
let items = [
    {
        title: '退出',
        click() {
            logout()
        },
    },
]

function logout() {
    let sessionStore = useSessionStore()

    const { fullPath } = useRoute()

    sessionStore.token = ''

    if (fullPath == undefined) {
        return navigateTo(`/login`)
    }
    return navigateTo(`/login?redirect=${fullPath}`)
}
</script>
