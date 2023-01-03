<template>
    <v-col class="pa-2">
        <v-hover>
            <template v-slot:default="{ isHovering, props }">
                <v-card v-bind="props" :elevation="isHovering ? 8 : 2">
                    <v-card-text class="py-4">
                        <v-row no-gutters>
                            <v-icon
                                color="error"
                                icon="mdi-weather-hurricane"
                                size="50"
                            ></v-icon>

                            <div class="ml-4">
                                <v-card-subtitle class="pl-0"
                                    >Total Income</v-card-subtitle
                                >
                                <v-card-title class="py-0 pl-0"
                                    >953,000</v-card-title
                                >
                            </div>
                        </v-row>
                    </v-card-text>
                </v-card>
            </template>
        </v-hover>
    </v-col>

    <v-col class="pa-2">
        <v-hover>
            <template v-slot:default="{ isHovering, props }">
                <v-card v-bind="props" :elevation="isHovering ? 8 : 2">
                    <v-card-text class="py-4">
                        <v-row
                            no-gutters
                            class="d-flex flex-no-wrap justify-space-between"
                        >
                            <div>
                                <v-card-subtitle class="pl-0"
                                    >Total Income</v-card-subtitle
                                >
                                <v-card-title class="py-0 pl-0"
                                    >$953,000

                                    <span
                                        class="text-red text-sm font-weight-bolder"
                                        >-2%</span
                                    >
                                </v-card-title>
                            </div>

                            <v-icon
                                color="error"
                                icon="mdi-weather-hurricane"
                                size="50"
                            ></v-icon>
                        </v-row>
                    </v-card-text>
                </v-card>
            </template>
        </v-hover>
    </v-col>

    <v-col class="pa-2">
        <v-hover>
            <template v-slot:default="{ isHovering, props }">
                <v-card v-bind="props" :elevation="isHovering ? 8 : 2">
                    <v-card-text class="py-4">
                        <v-row no-gutters>
                            <v-icon
                                color="error"
                                icon="mdi-weather-hurricane"
                                size="50"
                            ></v-icon>

                            <div class="ml-4">
                                <v-card-subtitle class="pl-0"
                                    >Total Income</v-card-subtitle
                                >
                                <v-card-title class="py-0 pl-0"
                                    >953,000</v-card-title
                                >
                            </div>
                        </v-row>
                    </v-card-text>
                </v-card>
            </template>
        </v-hover>
    </v-col>

    <v-col class="pa-2">
        <v-hover>
            <template v-slot:default="{ isHovering, props }">
                <v-card
                    class="height-full d-flex"
                    v-bind="props"
                    :elevation="isHovering ? 8 : 2"
                >
                    <v-card-text class="py-4 text-center align-self-center">
                        <v-btn
                            @click="clickPlus"
                            prepend-icon="mdi-plus"
                            variant="plain"
                        >
                            <div class="font-weight-black">New Tab</div>
                        </v-btn>
                    </v-card-text>
                </v-card>
            </template>
        </v-hover>
    </v-col>
</template>
<script>
export default {
    setup() {},
    methods: {
        clickPlus() {
            console.log('click')
        },
    },
}
</script>
