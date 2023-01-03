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
                    <v-card-title class="py-0 pl-0">力引导布局</v-card-title>
                    <v-card-subtitle class="pl-0">Force Layout</v-card-subtitle>
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
import * as echarts from 'echarts'
export default {
    setup() {
        const graphData = [
            ['2017-02-01', 260],
            ['2017-02-04', 200],
            ['2017-02-09', 279],
            ['2017-02-13', 847],
            ['2017-02-18', 241],
            ['2017-02-23', 411],
            ['2017-03-14', 985],
        ]
        const links = graphData.map(function (item, idx) {
            return {
                source: idx,
                target: idx + 1,
            }
        })
        links.pop()
        function getVirtualData(year) {
            const date = +echarts.time.parse(year + '-01-01')
            const end = +echarts.time.parse(+year + 1 + '-01-01')
            const dayTime = 3600 * 24 * 1000
            const data = []
            for (let time = date; time < end; time += dayTime) {
                data.push([
                    echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
                    Math.floor(Math.random() * 1000),
                ])
            }
            return data
        }
        const option = ref({
            tooltip: {},
            calendar: {
                top: 'middle',
                left: 'center',
                orient: 'vertical',
                cellSize: 40,
                yearLabel: {
                    margin: 50,
                    fontSize: 30,
                },
                dayLabel: {
                    firstDay: 1,
                    nameMap: 'cn',
                },
                monthLabel: {
                    nameMap: 'cn',
                    margin: 15,
                    fontSize: 20,
                    color: '#999',
                },
                range: ['2017-02', '2017-03-31'],
            },
            visualMap: {
                min: 0,
                max: 1000,
                type: 'piecewise',
                left: 'center',
                bottom: 20,
                inRange: {
                    color: ['#5291FF', '#C7DBFF'],
                },
                seriesIndex: [1],
                orient: 'horizontal',
            },
            series: [
                {
                    type: 'graph',
                    edgeSymbol: ['none', 'arrow'],
                    coordinateSystem: 'calendar',
                    links: links,
                    symbolSize: 15,
                    calendarIndex: 0,
                    itemStyle: {
                        color: 'yellow',
                        shadowBlur: 9,
                        shadowOffsetX: 1.5,
                        shadowOffsetY: 3,
                        shadowColor: '#555',
                    },
                    lineStyle: {
                        color: '#D10E00',
                        width: 1,
                        opacity: 1,
                    },
                    data: graphData,
                    z: 20,
                },
                {
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    data: getVirtualData('2017'),
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
    height: 500px;
}
</style>
