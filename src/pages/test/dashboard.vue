<template>
    <common-toolbar title="仪表盘" :show-expand-button="true">
        <template #toolbar-action>
            <v-rating v-model="rating">
                <template v-slot:item="props">
                    <v-icon
                        :color="
                            props.isFilled
                                ? colors[props.index]
                                : 'grey-lighten-1'
                        "
                        size="large"
                        @click="props.onClick"
                    >
                        {{
                            props.isFilled
                                ? 'mdi-star-circle'
                                : 'mdi-star-circle-outline'
                        }}
                    </v-icon>
                </template>
            </v-rating>
            <common-reload @click="init" />
            <common-nav-drawer />
        </template>
    </common-toolbar>

    <common-container :border="false" color="transparent">
        <common-row class="pa-2">
            <page-mini-message />
        </common-row>

        <common-row class="ma-2">
            <page-carousel />
        </common-row>

        <v-row no-gutters>
            <page-mini-card />
        </v-row>

        <v-row no-gutters>
            <v-col class="pa-2">
                <page-mini-table />
            </v-col>
            <v-col class="pa-2">
                <page-mini-alert />
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-col cols="4" class="pa-2">
                <page-mini-profile />
            </v-col>
            <v-col cols="4" class="pa-2">
                <page-mini-list />
            </v-col>
            <v-col cols="4" class="pa-2">
                <page-tabs />
            </v-col>
        </v-row>
    </common-container>
</template>

<script>
export default {
    data() {
        return {
            colors: ['green', 'purple', 'orange', 'indigo', 'red'],
            rating: 4.5,
        }
    },
    methods: {
        init() {},
    },
}
</script>
