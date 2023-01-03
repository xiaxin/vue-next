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
                    <v-card-title class="py-0 pl-0">基础旭日图</v-card-title>
                    <v-card-subtitle class="pl-0"
                        >Basic Sunburst</v-card-subtitle
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
            silent: true,
            series: [
                {
                    radius: [0, '100%'],
                    center: ['50%', '50%'],
                    type: 'sunburst',
                    sort: undefined,
                    emphasis: {
                        focus: 'ancestor',
                    },
                    data: [
                        {
                            value: 8,
                            children: [
                                {
                                    value: 4,
                                    children: [
                                        {
                                            value: 2,
                                        },
                                        {
                                            value: 1,
                                        },
                                        {
                                            value: 1,
                                        },
                                        {
                                            value: 0.5,
                                        },
                                    ],
                                },
                                {
                                    value: 2,
                                },
                            ],
                        },
                        {
                            value: 4,
                            children: [
                                {
                                    children: [
                                        {
                                            value: 2,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            value: 4,
                            children: [
                                {
                                    children: [
                                        {
                                            value: 2,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            value: 3,
                            children: [
                                {
                                    children: [
                                        {
                                            value: 1,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    label: {
                        color: '#000',
                        textBorderColor: '#fff',
                        textBorderWidth: 2,
                        formatter: function (param) {
                            var depth = param.treePathInfo.length
                            if (depth === 2) {
                                return 'radial'
                            } else if (depth === 3) {
                                return 'tangential'
                            } else if (depth === 4) {
                                return '0'
                            }
                            return ''
                        },
                    },
                    levels: [
                        {},
                        {
                            itemStyle: {
                                color: '#CD4949',
                            },
                            label: {
                                rotate: 'radial',
                            },
                        },
                        {
                            itemStyle: {
                                color: '#F47251',
                            },
                            label: {
                                rotate: 'tangential',
                            },
                        },
                        {
                            itemStyle: {
                                color: '#FFC75F',
                            },
                            label: {
                                rotate: 0,
                            },
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
    height: 400px;
}
</style>
