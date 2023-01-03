<template>
    <common-toolbar title="K 线" :show-expand-button="true"> </common-toolbar>

    <common-container :border="false" color="transparent">
        <page-echarts-candlestick-chart />
    </common-container>
</template>
