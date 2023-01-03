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
                    <v-card-title class="py-0 pl-0">得分环</v-card-title>
                    <v-card-subtitle class="pl-0">Ring Gauge</v-card-subtitle>
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
        const gaugeData = [
            {
                value: 20,
                name: 'Perfect',
                title: {
                    offsetCenter: ['0%', '-30%'],
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '-20%'],
                },
            },
            {
                value: 40,
                name: 'Good',
                title: {
                    offsetCenter: ['0%', '0%'],
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '10%'],
                },
            },
            {
                value: 60,
                name: 'Commonly',
                title: {
                    offsetCenter: ['0%', '30%'],
                },
                detail: {
                    valueAnimation: true,
                    offsetCenter: ['0%', '40%'],
                },
            },
        ]
        const option = ref({
            series: [
                {
                    radius: '90%',
                    center: ['50%', '50%'],
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    pointer: {
                        show: false,
                    },
                    progress: {
                        show: true,
                        overlap: false,
                        roundCap: true,
                        clip: false,
                        itemStyle: {
                            borderWidth: 1,
                            borderColor: '#464646',
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            width: 40,
                        },
                    },
                    splitLine: {
                        show: false,
                        distance: 0,
                        length: 10,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                        distance: 50,
                    },
                    data: gaugeData,
                    title: {
                        fontSize: 14,
                    },
                    detail: {
                        width: 50,
                        height: 10,
                        fontSize: 10,
                        color: 'auto',
                        borderColor: 'auto',
                        borderRadius: 20,
                        borderWidth: 1,
                        formatter: '{value}%',
                    },
                },
            ],
        })
        setInterval(function () {
            gaugeData[0].value = +(Math.random() * 100).toFixed(2)
            gaugeData[1].value = +(Math.random() * 100).toFixed(2)
            gaugeData[2].value = +(Math.random() * 100).toFixed(2)
            option.value.series[0] = {
                data: gaugeData,
                pointer: {
                    show: false,
                },
            }
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
