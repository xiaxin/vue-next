<template>
    <common-row class="pa-2">
        <div class="text-subtitle-1 font-weight-black">
            饼图用例 （PieChart）
        </div>
    </common-row>

    <v-row no-gutters>
        <v-col class="pa-2" cols="3">
            <page-echarts-pie-chart1 />
        </v-col>

        <v-col class="pa-2" cols="3">
            <v-hover>
                <page-echarts-pie-chart2 />
            </v-hover>
        </v-col>
        <v-col class="pa-2" cols="3">
            <v-hover>
                <page-echarts-pie-chart3 />
            </v-hover>
        </v-col>
        <v-col class="pa-2" cols="3">
            <v-hover>
                <page-echarts-pie-chart4 />
            </v-hover>
        </v-col>
    </v-row>
</template>
