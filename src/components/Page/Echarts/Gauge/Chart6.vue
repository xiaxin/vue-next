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
                    radius: '90%',
                    center: ['50%', '75%'],
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 1,
                    splitNumber: 8,
                    axisLine: {
                        lineStyle: {
                            width: 6,
                            color: [
                                [0.25, '#FF6E76'],
                                [0.5, '#FDDD60'],
                                [0.75, '#58D9F9'],
                                [1, '#7CFFB2'],
                            ],
                        },
                    },
                    pointer: {
                        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                        length: '12%',
                        width: 20,
                        offsetCenter: [0, '-60%'],
                        itemStyle: {
                            color: 'auto',
                        },
                    },
                    axisTick: {
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                            width: 2,
                        },
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            color: 'auto',
                            width: 5,
                        },
                    },
                    axisLabel: {
                        color: '#464646',
                        fontSize: 20,
                        distance: -60,
                        rotate: 'tangential',
                        formatter: function (value) {
                            if (value === 0.875) {
                                return 'Grade A'
                            } else if (value === 0.625) {
                                return 'Grade B'
                            } else if (value === 0.375) {
                                return 'Grade C'
                            } else if (value === 0.125) {
                                return 'Grade D'
                            }
                            return ''
                        },
                    },
                    title: {
                        offsetCenter: [0, '-10%'],
                        fontSize: 20,
                    },
                    detail: {
                        fontSize: 30,
                        offsetCenter: [0, '-35%'],
                        valueAnimation: true,
                        formatter: function (value) {
                            return Math.round(value * 100) + ''
                        },
                        color: 'auto',
                    },
                    data: [
                        {
                            value: 0.7,
                            name: 'Grade Rating',
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
