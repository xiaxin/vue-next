<template>
    <v-card tile>
        <!-- 侧边导航 -->
        <v-navigation-drawer app width="220" fixed>
            <common-list :items="items" />

            <template #append>
                <v-btn block :rounded="0" color="success">
                    <v-icon>mdi-{{ `chevron-right` }}</v-icon>
                </v-btn>
            </template>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    setup() {
        const store = useSystemStore()
        return { store }
    },
    data() {
        return {}
    },
    mounted() {},
    computed: {
        items() {
            return this.store.menus
        },
    },
}
</script>
