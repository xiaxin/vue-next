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
        var data = [
            {
                name: 'Grandpa',
                children: [
                    {
                        name: 'Uncle Leo',
                        value: 15,
                        children: [
                            {
                                name: 'Cousin Jack',
                                value: 2,
                            },
                            {
                                name: 'Cousin Mary',
                                value: 5,
                                children: [
                                    {
                                        name: 'Jackson',
                                        value: 2,
                                    },
                                ],
                            },
                            {
                                name: 'Cousin Ben',
                                value: 4,
                            },
                        ],
                    },
                    {
                        name: 'Father',
                        value: 10,
                        children: [
                            {
                                name: 'Me',
                                value: 5,
                            },
                            {
                                name: 'Brother Peter',
                                value: 1,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Nancy',
                children: [
                    {
                        name: 'Uncle Nike',
                        children: [
                            {
                                name: 'Cousin Betty',
                                value: 1,
                            },
                            {
                                name: 'Cousin Jenny',
                                value: 2,
                            },
                        ],
                    },
                ],
            },
        ]
        const option = ref({
            series: {
                type: 'sunburst',
                data: data,
                radius: [0, '100%'],
                center: ['50%', '50%'],
                label: {
                    rotate: 'radial',
                },

                itemStyle: {
                    borderRadius: 7,
                    borderWidth: 2,
                },
                label: {
                    show: true,
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
