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
                        >笛卡尔坐标系上的 Graph</v-card-title
                    >
                    <v-card-subtitle class="pl-0"
                        >Graph on Cartesian</v-card-subtitle
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
                text: 'Basic Graph',
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        show: true,
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        fontSize: 20,
                    },
                    data: [
                        {
                            name: 'Node 1',
                            x: 300,
                            y: 300,
                        },
                        {
                            name: 'Node 2',
                            x: 800,
                            y: 300,
                        },
                        {
                            name: 'Node 3',
                            x: 550,
                            y: 100,
                        },
                        {
                            name: 'Node 4',
                            x: 550,
                            y: 500,
                        },
                    ],
                    // links: [],
                    links: [
                        {
                            source: 0,
                            target: 1,
                            symbolSize: [5, 20],
                            label: {
                                show: true,
                            },
                            lineStyle: {
                                width: 5,
                                curveness: 0.2,
                            },
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 1',
                            label: {
                                show: true,
                            },
                            lineStyle: {
                                curveness: 0.2,
                            },
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 3',
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 3',
                        },
                        {
                            source: 'Node 2',
                            target: 'Node 4',
                        },
                        {
                            source: 'Node 1',
                            target: 'Node 4',
                        },
                    ],
                    lineStyle: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0,
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
    height: 300px;
}
</style>
