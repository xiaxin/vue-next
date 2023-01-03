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
                    <v-card-title class="py-0 pl-0">漏斗图</v-card-title>
                    <v-card-subtitle class="pl-0">Funnel Chart</v-card-subtitle>
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
            title: {
                text: 'Funnel',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%',
            },
            toolbox: {
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {},
                },
            },
            legend: {
                data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
            },
            series: [
                {
                    name: 'Funnel',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    bottom: 60,
                    width: '80%',
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'inside',
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid',
                        },
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1,
                    },
                    emphasis: {
                        label: {
                            fontSize: 20,
                        },
                    },
                    data: [
                        { value: 60, name: 'Visit' },
                        { value: 40, name: 'Inquiry' },
                        { value: 20, name: 'Order' },
                        { value: 80, name: 'Click' },
                        { value: 100, name: 'Show' },
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
    height: 600px;
}
</style>
