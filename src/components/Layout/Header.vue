<template>
    <v-app-bar flat :border="true" density="comfortable" class="">
        <div class="text-h5 text-center" style="width: 220px">
            {{ system }}
        </div>
        <div>
            <v-btn
                variant="text"
                :color="system == 'component' ? 'primary' : ''"
                @click="setSystem('component')"
                >组件</v-btn
            >
            <v-btn
                variant="text"
                :color="system == 'system' ? 'primary' : ''"
                @click="setSystem('system')"
                >管理系统</v-btn
            >
        </div>

        <template #append>
            <layout-header-menu />
        </template>
    </v-app-bar>
</template>

<script>
export default {
    setup() {
        const store = useSystemStore()
        return { store }
    },
    data() {
        return {
            system: 'component',
        }
    },
    mounted() {
        this.setSystem(this.system)
    },
    methods: {
        setSystem(system) {
            this.system = system
            this.store.setMenus(system)

            if (system == 'system') {
                navigateTo('/')
            } else {
                navigateTo('/test/dashboard')
            }
        },
    },
}
</script>
