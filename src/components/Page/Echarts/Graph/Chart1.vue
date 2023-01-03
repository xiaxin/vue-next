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
export default {
    setup() {
        function createNodes(count) {
            var nodes = []
            for (var i = 0; i < count; i++) {
                nodes.push({
                    id: i + '',
                })
            }
            return nodes
        }
        function createEdges(count) {
            var edges = []
            if (count === 2) {
                return [[0, 1]]
            }
            for (var i = 0; i < count; i++) {
                edges.push([i, (i + 1) % count])
            }
            return edges
        }
        var datas = []
        for (var i = 0; i < 16; i++) {
            datas.push({
                nodes: createNodes(i + 2),
                edges: createEdges(i + 2),
            })
        }
        const option = ref({
            series: datas.map(function (item, idx) {
                return {
                    type: 'graph',
                    layout: 'force',
                    animation: false,
                    data: item.nodes,
                    left: (idx % 4) * 25 + '%',
                    top: Math.floor(idx / 4) * 25 + '%',
                    width: '25%',
                    height: '25%',
                    force: {
                        // initLayout: 'circular'
                        // gravity: 0
                        repulsion: 60,
                        edgeLength: 2,
                    },
                    edges: item.edges.map(function (e) {
                        return {
                            source: e[0] + '',
                            target: e[1] + '',
                        }
                    }),
                }
            }),
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
