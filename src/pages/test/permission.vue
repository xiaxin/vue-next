<template>
    <common-container color="transparent" :border="false">
        <common-row class="pa-2">
            <v-switch
                v-model="value"
                :label="`Switch: ${value}`"
                hide-details
            ></v-switch>
        </common-row>
        <common-row class="pa-2">
            <v-card max-width="300">
                <v-list density="compact">
                    <v-list-subheader>REPORTS</v-list-subheader>

                    <template v-for="(item, i) in items">
                        <v-list-item
                            v-if="auth(item.value)"
                            :key="i"
                            :value="item"
                        >
                            <v-list-item-title
                                v-text="item.value"
                            ></v-list-item-title>
                        </v-list-item>
                    </template>
                </v-list>
            </v-card>
        </common-row>
        <common-row class="pa-2">
            <template v-for="(item, i) in items">
                <permission-button
                    variant="outlined"
                    size="small"
                    class="mr-2"
                    :permission-key="item.value"
                    >{{ item.title }}</permission-button
                ></template
            >
        </common-row>
    </common-container>
</template>

<script>
export default {
    setup() {
        const store = useSystemStore()
        return { store }
    },
    data() {
        return {
            items: [
                {
                    title: 'a',
                    value: 'a',
                },
                {
                    title: 'b',
                    value: 'b',
                },
                {
                    title: 'c',
                    value: 'c',
                },
                {
                    title: 'd',
                    value: 'd',
                },
                {
                    title: 'e',
                    value: 'e',
                },
                {
                    title: 'f',
                    value: 'f',
                },
            ],
        }
    },
    computed: {
        value: {
            set: function (value) {
                if (value) {
                    this.store.openPermission()
                } else {
                    this.store.closePermission()
                }
            },
            get: function () {
                return this.store.enablePermission
            },
        },
    },
    mounted() {
        this.store.fetchPermissions()
    },
    methods: {
        auth(key) {
            const val = this.store.auth(key)
            return val
        },
    },
}
</script>
