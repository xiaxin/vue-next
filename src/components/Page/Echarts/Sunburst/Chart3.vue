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
        const item1 = {
            color: '#F54F4A',
        }
        const item2 = {
            color: '#FF8C75',
        }
        const item3 = {
            color: '#FFB499',
        }
        const data = [
            {
                children: [
                    {
                        value: 5,
                        children: [
                            {
                                value: 1,
                                itemStyle: item1,
                            },
                            {
                                value: 2,
                                children: [
                                    {
                                        value: 1,
                                        itemStyle: item2,
                                    },
                                ],
                            },
                            {
                                children: [
                                    {
                                        value: 1,
                                    },
                                ],
                            },
                        ],
                        itemStyle: item1,
                    },
                    {
                        value: 10,
                        children: [
                            {
                                value: 6,
                                children: [
                                    {
                                        value: 1,
                                        itemStyle: item1,
                                    },
                                    {
                                        value: 1,
                                    },
                                    {
                                        value: 1,
                                        itemStyle: item2,
                                    },
                                    {
                                        value: 1,
                                    },
                                ],
                                itemStyle: item3,
                            },
                            {
                                value: 2,
                                children: [
                                    {
                                        value: 1,
                                    },
                                ],
                                itemStyle: item3,
                            },
                            {
                                children: [
                                    {
                                        value: 1,
                                        itemStyle: item2,
                                    },
                                ],
                            },
                        ],
                        itemStyle: item1,
                    },
                ],
                itemStyle: item1,
            },
            {
                value: 9,
                children: [
                    {
                        value: 4,
                        children: [
                            {
                                value: 2,
                                itemStyle: item2,
                            },
                            {
                                children: [
                                    {
                                        value: 1,
                                        itemStyle: item1,
                                    },
                                ],
                            },
                        ],
                        itemStyle: item1,
                    },
                    {
                        children: [
                            {
                                value: 3,
                                children: [
                                    {
                                        value: 1,
                                    },
                                    {
                                        value: 1,
                                        itemStyle: item2,
                                    },
                                ],
                            },
                        ],
                        itemStyle: item3,
                    },
                ],
                itemStyle: item2,
            },
            {
                value: 7,
                children: [
                    {
                        children: [
                            {
                                value: 1,
                                itemStyle: item3,
                            },
                            {
                                value: 3,
                                children: [
                                    {
                                        value: 1,
                                        itemStyle: item2,
                                    },
                                    {
                                        value: 1,
                                    },
                                ],
                                itemStyle: item2,
                            },
                            {
                                value: 2,
                                children: [
                                    {
                                        value: 1,
                                    },
                                    {
                                        value: 1,
                                        itemStyle: item1,
                                    },
                                ],
                                itemStyle: item1,
                            },
                        ],
                        itemStyle: item3,
                    },
                ],
                itemStyle: item1,
            },
            {
                children: [
                    {
                        value: 6,
                        children: [
                            {
                                value: 1,
                                itemStyle: item2,
                            },
                            {
                                value: 2,
                                children: [
                                    {
                                        value: 2,
                                        itemStyle: item2,
                                    },
                                ],
                                itemStyle: item1,
                            },
                            {
                                value: 1,
                                itemStyle: item3,
                            },
                        ],
                        itemStyle: item3,
                    },
                    {
                        value: 3,
                        children: [
                            {
                                value: 1,
                            },
                            {
                                children: [
                                    {
                                        value: 1,
                                        itemStyle: item2,
                                    },
                                ],
                            },
                            {
                                value: 1,
                            },
                        ],
                        itemStyle: item3,
                    },
                ],
                itemStyle: item1,
            },
        ]
        const option = ref({
            series: {
                radius: [0, '100%'],
                center: ['50%', '50%'],
                type: 'sunburst',
                sort: undefined,
                emphasis: {
                    focus: 'ancestor',
                },
                data: data,
                label: {
                    rotate: 'radial',
                },
                levels: [],
                itemStyle: {
                    color: '#ddd',
                    borderWidth: 2,
                },
            },
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
