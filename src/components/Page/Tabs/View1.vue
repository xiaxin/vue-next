<template>
    <v-row no-gutters>
        <v-col cols="12" class="pa-2">
            <v-card>
                <v-tabs v-model="tab" bg-color="primary">
                    <v-tab value="1">Item One</v-tab>
                    <v-tab value="2">Item Two</v-tab>
                    <v-tab value="3">Item Three</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item value="1"> One </v-window-item>

                        <v-window-item value="2"> Two </v-window-item>

                        <v-window-item value="3"> Three </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        tab: '3',
    }),
    watch: {
        tab(newValue, oldValue) {
            console.log('[tabs] [val] new:', newValue, ' old:', oldValue)
        },
    },
}
</script>
