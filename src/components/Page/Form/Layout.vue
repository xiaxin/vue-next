<template>
    <common-row class="pa-2" flex>
        <div style="width: 120px">
            <v-select
                v-model="variant"
                label="Variant"
                :items="['filled', 'underlined', 'outlined', 'solo', 'plain']"
                variant="solo"
                hide-details
            ></v-select>
        </div>
        <div style="width: 120px" class="ml-4">
            <v-select
                v-model="hideDetails"
                label="HideDetails"
                :items="[
                    { label: '显示', value: false },
                    { label: '隐藏', value: true },
                ]"
                item-title="label"
                item-value="value"
                variant="solo"
                hide-details
            ></v-select>
        </div>

        <div style="width: 120px" class="ml-4">
            <v-select
                v-model="density"
                label="Density"
                :items="['default', 'comfortable', 'compact']"
                variant="solo"
                hide-details
            ></v-select>
        </div>
    </common-row>

    <common-row class="pa-2">
        <v-card>
            <v-card-text>
                <v-defaults-provider :defaults="defaults">
                    <page-form-view1 />
                </v-defaults-provider>
            </v-card-text>
        </v-card>
    </common-row>

    <common-row class="pa-2">
        <div class="text-subtitle-1 font-weight-black">表单用例</div>
    </common-row>

    <common-row class="pa-2">
        <v-card>
            <v-card-text>
                <v-defaults-provider :defaults="defaults">
                    <page-form-view2 />
                </v-defaults-provider>
            </v-card-text>
        </v-card>
    </common-row>
</template>

<script>
export default {
    data: () => ({
        variant: 'outlined',
        hideDetails: true,
        density: 'default',
        defaults: {
            global: {
                elevation: 4,
                variant: 'outlined',
                hideDetails: true,
            },
        },
    }),
    watch: {
        variant(newValue, oldValue) {
            this.defaults.global.variant = newValue
        },

        hideDetails(newValue, oldValue) {
            this.defaults.global.hideDetails = newValue
        },
        density(newValue, oldValue) {
            this.defaults.global.density = newValue
        },
    },
}
</script>
