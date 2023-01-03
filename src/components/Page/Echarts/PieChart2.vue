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
                        >某站点用户Access From</v-card-title
                    >
                    <v-card-subtitle class="pl-0"
                        >Referer of a Website</v-card-subtitle
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
            tooltip: {
                trigger: 'item',
            },
            legend: {
                left: '0%',
                orient: 'vertical',
                y: '12%',

                textStyle: {
                    fontSize: 10,
                },
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '90%',
                    center: ['70%', '50%'],

                    labelLine: {
                        show: false,
                    },
                    label: {
                        show: false,
                        position: 'center',
                    },
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' },
                    ],
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold',
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
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
    height: 160px;
}
</style>
