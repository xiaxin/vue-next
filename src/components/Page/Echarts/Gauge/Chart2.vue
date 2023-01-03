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
                        >带标签数字动画的基础仪表盘</v-card-title
                    >
                    <v-card-subtitle class="pl-0">Simple Gauge</v-card-subtitle>
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
                formatter: '{a} <br/>{b} : {c}%',
            },
            series: [
                {
                    name: 'Pressure',
                    type: 'gauge',
                    progress: {
                        show: true,
                    },
                    detail: {
                        valueAnimation: true,
                        formatter: '{value}',
                    },
                    data: [
                        {
                            value: 50,
                            name: 'SCORE',
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
