<template>
    <v-row no-gutters>
        <v-col cols="6">
            <v-row no-gutters>
                <v-col cols="12" class="pa-2">
                    <page-echarts-graph-chart2 />
                </v-col>
            </v-row>

            <v-row no-gutters>
                <v-col cols="12" class="pa-2">
                    <page-echarts-graph-chart3 />
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="6" class="pa-2">
            <page-echarts-graph-chart1 />
        </v-col>
    </v-row>

    <v-row no-gutters>
        <v-col cols="6" class="pa-2">
            <page-echarts-graph-chart4 />
        </v-col>
    </v-row>
</template>
