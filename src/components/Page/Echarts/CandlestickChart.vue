<template>
    <common-row class="pa-2">
        <div class="text-subtitle-1 font-weight-black">
            K 线图 （Candlestick）
        </div>
    </common-row>

    <v-row no-gutters>
        <v-col class="pa-2" cols="4">
            <page-echarts-candlestick-chart3 />
        </v-col>
    </v-row>

    <v-row no-gutters>
        <v-col class="pa-2" cols="6">
            <page-echarts-candlestick-chart1 />
        </v-col>
        <v-col class="pa-2" cols="6">
            <page-echarts-candlestick-chart2 />
        </v-col>
    </v-row>
</template>
