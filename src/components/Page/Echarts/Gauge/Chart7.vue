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
        const gaugeData = [
            {
                value: 20,
                name: 'Good',
                title: {
                    offsetCenter: ['-40%', '80%'],
                },
                detail: {
                    offsetCenter: ['-40%', '95%'],
                },
            },
            {
                value: 40,
                name: 'Better',
                title: {
                    offsetCenter: ['0%', '80%'],
                },
                detail: {
                    offsetCenter: ['0%', '95%'],
                },
            },
            {
                value: 60,
                name: 'Perfect',
                title: {
                    offsetCenter: ['40%', '80%'],
                },
                detail: {
                    offsetCenter: ['40%', '95%'],
                },
            },
        ]
        const option = ref({
            series: [
                {
                    radius: '80%',
                    center: ['50%', '50%'],
                    type: 'gauge',
                    anchor: {
                        show: true,
                        showAbove: true,
                        size: 18,
                        itemStyle: {
                            color: '#FAC858',
                        },
                    },
                    pointer: {
                        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                        width: 8,
                        length: '80%',
                        offsetCenter: [0, '8%'],
                    },
                    progress: {
                        show: true,
                        overlap: true,
                        roundCap: true,
                    },
                    axisLine: {
                        roundCap: true,
                    },
                    data: gaugeData,
                    title: {
                        fontSize: 14,
                    },
                    detail: {
                        width: 40,
                        height: 14,
                        fontSize: 14,
                        color: '#fff',
                        backgroundColor: 'auto',
                        borderRadius: 3,
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
