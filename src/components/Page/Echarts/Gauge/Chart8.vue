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
                    <v-card-title class="py-0 pl-0">基础仪表盘</v-card-title>
                    <v-card-subtitle class="pl-0"
                        >Gauge Basic chart</v-card-subtitle
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
        const option = ref({
            series: [
                {
                    type: 'gauge',
                    center: ['50%', '60%'],
                    startAngle: 200,
                    endAngle: -20,
                    min: 0,
                    max: 60,
                    splitNumber: 12,
                    itemStyle: {
                        color: '#FFAB91',
                    },
                    progress: {
                        show: true,
                        width: 30,
                    },
                    pointer: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            width: 30,
                        },
                    },
                    axisTick: {
                        distance: -45,
                        splitNumber: 5,
                        lineStyle: {
                            width: 2,
                            color: '#999',
                        },
                    },
                    splitLine: {
                        distance: -52,
                        length: 14,
                        lineStyle: {
                            width: 3,
                            color: '#999',
                        },
                    },
                    axisLabel: {
                        distance: -20,
                        color: '#999',
                        fontSize: 20,
                    },
                    anchor: {
                        show: false,
                    },
                    title: {
                        show: false,
                    },
                    detail: {
                        valueAnimation: true,
                        width: '60%',
                        lineHeight: 40,
                        borderRadius: 8,
                        offsetCenter: [0, '0%'],
                        fontSize: 35,
                        fontWeight: 'bolder',
                        formatter: '{value} °C',
                        color: 'auto',
                    },
                    data: [
                        {
                            value: 20,
                        },
                    ],
                },
                {
                    type: 'gauge',
                    center: ['50%', '60%'],
                    startAngle: 200,
                    endAngle: -20,
                    min: 0,
                    max: 60,
                    itemStyle: {
                        color: '#FD7347',
                    },
                    progress: {
                        show: true,
                        width: 8,
                    },
                    pointer: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    detail: {
                        show: false,
                    },
                    data: [
                        {
                            value: 20,
                        },
                    ],
                },
            ],
        })
        setInterval(function () {
            const random = +(Math.random() * 60).toFixed(2)

            option.value.series = [
                {
                    data: [
                        {
                            value: random,
                        },
                    ],
                },
                {
                    data: [
                        {
                            value: random,
                        },
                    ],
                },
            ]
        }, 2000)

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
