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
                    <v-card-title class="py-0 pl-0"
                        >自定义折线图样式</v-card-title
                    >
                    <v-card-subtitle class="pl-0"
                        >Line Style and Item Style</v-card-subtitle
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
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
                type: 'value',
            },

            grid: {
                top: '5%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'line',
                    symbol: 'triangle',
                    symbolSize: 20,
                    lineStyle: {
                        color: '#5470C6',
                        width: 4,
                        type: 'dashed',
                    },
                    itemStyle: {
                        borderWidth: 3,
                        borderColor: '#EE6666',
                        color: 'yellow',
                    },
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
    height: 350px;
}
</style>
