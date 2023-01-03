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
                    <v-card-title class="py-0 pl-0">漏斗图(对比)</v-card-title>
                    <v-card-subtitle class="pl-0"
                        >Funnel Compare</v-card-subtitle
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
                text: 'Funnel Compare',
                subtext: 'Fake Data',
                left: 'left',
                top: 'bottom',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%',
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {},
                },
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Prod A', 'Prod B', 'Prod C', 'Prod D', 'Prod E'],
            },
            series: [
                {
                    name: 'Funnel',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '5%',
                    top: '50%',
                    funnelAlign: 'right',
                    data: [
                        { value: 60, name: 'Prod C' },
                        { value: 30, name: 'Prod D' },
                        { value: 10, name: 'Prod E' },
                        { value: 80, name: 'Prod B' },
                        { value: 100, name: 'Prod A' },
                    ],
                },
                {
                    name: 'Pyramid',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '5%',
                    top: '5%',
                    sort: 'ascending',
                    funnelAlign: 'right',
                    data: [
                        { value: 60, name: 'Prod C' },
                        { value: 30, name: 'Prod D' },
                        { value: 10, name: 'Prod E' },
                        { value: 80, name: 'Prod B' },
                        { value: 100, name: 'Prod A' },
                    ],
                },
                {
                    name: 'Funnel',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '55%',
                    top: '5%',
                    funnelAlign: 'left',
                    data: [
                        { value: 60, name: 'Prod C' },
                        { value: 30, name: 'Prod D' },
                        { value: 10, name: 'Prod E' },
                        { value: 80, name: 'Prod B' },
                        { value: 100, name: 'Prod A' },
                    ],
                },
                {
                    name: 'Pyramid',
                    type: 'funnel',
                    width: '40%',
                    height: '45%',
                    left: '55%',
                    top: '50%',
                    sort: 'ascending',
                    funnelAlign: 'left',
                    data: [
                        { value: 60, name: 'Prod C' },
                        { value: 30, name: 'Prod D' },
                        { value: 10, name: 'Prod E' },
                        { value: 80, name: 'Prod B' },
                        { value: 100, name: 'Prod A' },
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
