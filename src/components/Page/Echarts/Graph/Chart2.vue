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
        const axisData = [
            'Mon',
            'Tue',
            'Wed',
            'Very Loooong Thu',
            'Fri',
            'Sat',
            'Sun',
        ]
        const data = axisData.map(function (item, i) {
            return Math.round(Math.random() * 1000 * (i + 1))
        })
        const links = data.map(function (item, i) {
            return {
                source: i,
                target: i + 1,
            }
        })
        links.pop()
        const option = ref({
            title: {
                text: 'Graph on Cartesian',
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: axisData,
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    coordinateSystem: 'cartesian2d',
                    symbolSize: 40,
                    label: {
                        show: true,
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    data: data,
                    links: links,
                    lineStyle: {
                        color: '#2f4554',
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
