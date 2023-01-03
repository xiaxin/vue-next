<template>
    <common-menu :items="docItems" title="文档" open-on-hover />

    <vertical-divider />

    <common-menu :items="themeItems" title="Vuetify 主题" open-on-hover />

    <vertical-divider />

    <layout-header-user />
</template>

<script setup>
const docItems = [
    { divider: true },
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
    {
        title: 'Nitro',
        href: 'https://nitro.unjs.io/',
    },
    {
        title: 'Vue ECharts',
        href: 'https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md',
    },
    {
        title: 'Vite',
        href: 'https://cn.vitejs.dev/',
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

    { divider: true },
    {
        title: 'TDesign',
        href: 'https://tdesign.tencent.com/vue/components/overview',
    },
    {
        title: 'Semi Design',
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
        title: 'AdminPro',
        href: 'https://adminpro-vuetify-main.netlify.app/dashboards/minimal',
    },
    {
        title: 'Octavia Pro',
        href: 'https://www.figma.com/file/sm013rBADsF87wiqo0Vu5A/Octavia-Pro-V1.0.0-Preview?node-id=931%3A16272',
    },
    {
        title: 'Soft UI Dashboard PRO',
        href: 'https://demos.creative-tim.com/vuetify-soft-ui-dashboard-pro-marketplace/#/pages/dashboards/default',
    },
]
</script>
