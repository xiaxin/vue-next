<template>
    <v-card class="height-full" :elevation="2">
        <v-card-text class="pa-0 height-full">
            <div class="align-self-center pa-4 d-flex">
                <v-icon
                    color="error"
                    icon="mdi-weather-hurricane"
                    size="50"
                    class="mr-4"
                ></v-icon>

                <div>
                    <v-card-title class="py-0 pl-0">速度仪表盘</v-card-title>
                    <v-card-subtitle class="pl-0">Speed Gauge</v-card-subtitle>
                </div>
            </div>
            <common-divider />
            <div class="pa-4">
                <v-chart class="chart" ref="chart" :option="option" />
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    setup() {
        const option = ref({
            series: [
                {
                    type: 'gauge',
                    progress: {
                        show: true,
                        width: 18,
                    },
                    axisLine: {
                        lineStyle: {
                            width: 18,
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    // 线
                    splitLine: {
                        length: 10,
                        lineStyle: {
                            width: 2,
                            color: '#999',
                        },
                    },
                    axisLabel: {
                        distance: 25,
                        color: '#999',
                        fontSize: 16,
                    },
                    anchor: {
                        show: true,
                        showAbove: true,
                        size: 25,
                        itemStyle: {
                            borderWidth: 10,
                        },
                    },
                    title: {
                        show: false,
                    },
                    detail: {
                        valueAnimation: true,
                        fontSize: 40,
                        offsetCenter: [0, '70%'],
                    },
                    data: [
                        {
                            value: 70,
                        },
                    ],
                },
            ],
        })
        return { option }
    },

    props: {},

    mounted() {
        const object = this.$refs.chart
        setTimeout(function () {
            object.resize()
        }, 200)
    },
}
</script>

<style scoped>
.chart {
    height: 300px;
}
</style>
