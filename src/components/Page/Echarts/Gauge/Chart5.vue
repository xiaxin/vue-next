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
                    <v-card-title class="py-0 pl-0"
                        >阶段速度仪表盘</v-card-title
                    >
                    <v-card-subtitle class="pl-0"
                        >Stage Speed Gauge</v-card-subtitle
                    >
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
        let option = ref({
            series: [
                {
                    radius: '100%',
                    center: ['50%', '50%'],
                    type: 'gauge',
                    axisLine: {
                        lineStyle: {
                            width: 30,
                            color: [
                                [0.3, '#67e0e3'],
                                [0.7, '#37a2da'],
                                [1, '#fd666d'],
                            ],
                        },
                    },
                    pointer: {
                        itemStyle: {
                            color: 'auto',
                        },
                    },
                    axisTick: {
                        distance: -30,
                        length: 8,
                        lineStyle: {
                            color: '#fff',
                            width: 2,
                        },
                    },
                    splitLine: {
                        distance: -30,
                        length: 30,
                        lineStyle: {
                            color: '#fff',
                            width: 4,
                        },
                    },
                    axisLabel: {
                        color: 'auto',
                        distance: 40,
                        fontSize: 20,
                    },
                    detail: {
                        valueAnimation: true,
                        formatter: '{value} km/h',
                        color: 'auto',
                    },
                    data: [
                        {
                            value: 70,
                        },
                    ],
                },
            ],
        })

        onMounted(() => {
            setInterval(function () {
                option.value.series[0] = {
                    data: [
                        {
                            value: +(Math.random() * 100).toFixed(2),
                        },
                    ],
                }
            }, 2000)
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
