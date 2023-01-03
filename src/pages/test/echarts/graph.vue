<template>
    <common-toolbar title="关系图" :show-expand-button="true"> </common-toolbar>

    <common-container :border="false" color="transparent">
        <page-echarts-graph-layout />
    </common-container>
</template>
