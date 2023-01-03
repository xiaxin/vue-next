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
                        >基础南丁格尔玫瑰图</v-card-title
                    >
                    <v-card-subtitle class="pl-0"
                        >Nightingale Chart</v-card-subtitle
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
            legend: {
                left: '2%',
                orient: 'vertical',
                y: '0%',
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: ['25%', '100%'],
                    center: ['70%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8,
                    },
                    data: [
                        { value: 40, name: 'rose 1' },
                        { value: 38, name: 'rose 2' },
                        { value: 32, name: 'rose 3' },
                        { value: 30, name: 'rose 4' },
                        { value: 28, name: 'rose 5' },
                        { value: 26, name: 'rose 6' },
                        { value: 22, name: 'rose 7' },
                        { value: 18, name: 'rose 8' },
                    ],
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
