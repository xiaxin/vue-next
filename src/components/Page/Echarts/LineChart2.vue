<template>
    <v-card class="" :elevation="2">
        <v-card-text class="pa-0">
            <div class="align-self-center pa-4 d-flex">
                <v-icon
                    color="error"
                    icon="mdi-weather-hurricane"
                    size="50"
                    class="mr-4"
                ></v-icon>

                <div>
                    <v-card-title class="py-0 pl-0">基础面积图</v-card-title>
                    <v-card-subtitle class="pl-0"
                        >Basic area chart</v-card-subtitle
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
        const smooth = ref(false)
        const option = ref({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

                boundaryGap: false,
            },
            yAxis: {
                type: 'value',
            },
            grid: [{ left: '8%', top: '5%', width: '92%', height: '80%' }],
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line',
                    // 平滑
                    smooth: smooth,

                    areaStyle: {},
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
    height: 160px;
}
</style>
