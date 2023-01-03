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
                        >饼图自定义样式</v-card-title
                    >
                    <v-card-subtitle class="pl-0"
                        >Customized Pie</v-card-subtitle
                    >
                </div>
            </div>
            <common-divider />
            <div>
                <v-chart class="chart" ref="chart" :option="option" />
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    setup() {
        const option = ref({
            backgroundColor: '#2c343c',
            tooltip: {
                trigger: 'item',
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1],
                },
            },
            legend: {
                left: '3%',
                orient: 'vertical',
                y: 'center',
                textStyle: {
                    //图例文字的样式
                    color: '#fff',
                    fontSize: 10,
                },
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '90%',
                    center: ['80%', '50%'],
                    data: [
                        { value: 335, name: 'Direct' },
                        { value: 310, name: 'Email' },
                        { value: 274, name: 'Union Ads' },
                        { value: 235, name: 'Video Ads' },
                        { value: 400, name: 'Search Engine' },
                    ].sort(function (a, b) {
                        return a.value - b.value
                    }),
                    roseType: 'radius',
                    label: {
                        show: false,
                        position: 'center',
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200
                    },
                },
            ],
        })

        return { option }
    },

    mounted() {
        const object = this.$refs.chart
        setTimeout(function () {
            // window.addEventListener('resize', () => {
            object.resize()
            console.log('resize')
            // })
        }, 200)
    },
}
</script>

<style scoped>
.chart {
    height: 192px;
}
</style>
