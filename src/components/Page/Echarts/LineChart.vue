<template>
    <!-- 
    <common-row class="pa-2">
        <div class="text-subtitle-1 font-weight-black">
            折线图 （LineChart）
        </div>
    </common-row>
    -->

    <v-row no-gutters>
        <v-col cols="6">
            <v-row no-gutters>
                <v-col cols="6" class="pa-2">
                    <page-echarts-line-chart1 />
                </v-col>
                <v-col cols="6" class="pa-2">
                    <page-echarts-line-chart2 />
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="12" class="pa-2">
                    <page-echarts-line-chart4 />
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="6">
            <v-row no-gutters>
                <v-col cols="12" class="pa-2">
                    <!-- 350 -->
                    <page-echarts-line-chart3 />
                </v-col>
                <v-col cols="12">
                    <v-row no-gutters>
                        <v-col cols="6" class="pa-2">
                            <page-echarts-line-chart5 />
                        </v-col>
                        <v-col cols="6" class="pa-2">
                            <page-echarts-line-chart6 />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <common-row class="pa-2">
        <div class="text-subtitle-1 font-weight-black">分割线</div>
    </common-row>
    <v-row no-gutters>
        <v-col cols="6" class="pa-2">
            <page-echarts-line-chart7 />
        </v-col>
        <v-col cols="6" class="pa-2">
            <page-echarts-line-chart8 />
        </v-col>
    </v-row>
</template>
