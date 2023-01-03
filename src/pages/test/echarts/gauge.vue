<template>
    <common-toolbar title="仪表盘" :show-expand-button="true"> </common-toolbar>

    <common-container :border="false" color="transparent">
        <page-echarts-gauge-layout />
    </common-container>
</template>
