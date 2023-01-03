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
                    <v-card-title class="py-0 pl-0">自定义漏斗图</v-card-title>
                    <v-card-subtitle class="pl-0"
                        >Customized Funnel</v-card-subtitle
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
                    name: 'Expected',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    label: {
                        formatter: '{b}Expected',
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        opacity: 0.7,
                    },
                    emphasis: {
                        label: {
                            position: 'inside',
                            formatter: '{b}Expected: {c}%',
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
                {
                    name: 'Actual',
                    type: 'funnel',
                    left: '10%',
                    width: '80%',
                    maxSize: '80%',
                    label: {
                        position: 'inside',
                        formatter: '{c}%',
                        color: '#fff',
                    },
                    itemStyle: {
                        opacity: 0.5,
                        borderColor: '#fff',
                        borderWidth: 2,
                    },
                    emphasis: {
                        label: {
                            position: 'inside',
                            formatter: '{b}Actual: {c}%',
                        },
                    },
                    data: [
                        { value: 30, name: 'Visit' },
                        { value: 10, name: 'Inquiry' },
                        { value: 5, name: 'Order' },
                        { value: 50, name: 'Click' },
                        { value: 80, name: 'Show' },
                    ],
                    // Ensure outer shape will not be over inner shape when hover.
                    z: 100,
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
