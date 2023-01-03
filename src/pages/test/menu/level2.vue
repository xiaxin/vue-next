<template>
    <common-container>
        <common-list :items="docItems"></common-list>
    </common-container>
</template>

<script setup>
const docItems = [
    { title: 'Vue 3', href: 'https://cn.vuejs.org/guide/introduction.html' },
    { title: 'Pinia', href: 'https://pinia.vuejs.org/zh/introduction.html' },
    {
        title: 'Vuetify',
        href: 'https://next.vuetifyjs.com/en/getting-started/installation/',
    },
    {
        title: 'NuxtJS V3',
        href: 'https://v3.nuxtjs.org/getting-started/installation/',
    },

    { divider: true },
    {
        title: 'TDesign',
        href: 'https://tdesign.tencent.com/vue/components/overview',
    },
    {
        title: 'Semi Design',
        href: 'https://tdesign.tencent.com/vue/components/overview',
    },

    { divider: true },
    { title: 'Vite', href: 'https://cn.vitejs.dev/guide/' },

    { title: 'Vuex', href: 'https://vuex.vuejs.org/zh/' },
    { title: 'Vuetify', href: 'https://vuetifyjs.com/zh-Hans/' },
    { title: 'NuxtJS', href: 'https://www.nuxtjs.cn' },
    {
        title: 'ApexCharts',
        href: 'https://apexcharts.com/vue-chart-demos/',
    },
    {
        title: 'ECharts',
        href: 'https://echarts.apache.org/zh/index.html',
    },
    {
        title: 'Smei Design',
        href: 'https://semi.design/zh-CN',
    },
]
const themeItems = [
    {
        title: 'Vuetify主题',
        href: 'https://vuetifyjs.com/zh-Hans/resources/themes/',
    },
    { divider: true },
    {
        title: 'CarbonUI',
        href: 'https://carbon-ui.indielayer.com/',
    },
    {
        title: 'LuxPro',
        href: 'https://lux-admin-pro.indielayer.com/dashboard/analytics',
    },
    {
        title: 'VueMaterial',
        href: 'https://templates-flatlogic.herokuapp.com/vue-material/#/user/profile',
    },
    {
        title: 'Vuetify Material Dashboard Free',
        href: 'https://vuetify-material-dashboard-free.vuetifyjs.com/?ref=store.vuetifyjs.com',
    },
    {
        title: 'Materialpro Vuetify Admin',
        href: 'https://wrappixel.com/demos/vuejs-admin-templates/materialpro-vuetify-admin/main/dashboards/analytical',
    },
    {
        title: 'Soft UI',
        href: 'https://demos.creative-tim.com/vuetify-soft-ui-dashboard-pro-marketplace/#/pages/dashboards/default',
    },
    {
        title: 'Octavia Admin',
        href: 'https://octavia-admin.vercel.app/',
    },
]
</script>
