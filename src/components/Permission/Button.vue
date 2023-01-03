<template>
    <v-btn v-if="auth(permissionKey)"> <slot /> </v-btn>
</template>

<script>
export default {
    props: {
        permissionKey: {
            type: String,
            default: '',
        },
    },

    setup() {
        const store = useSystemStore()
        return { store }
    },
    methods: {
        auth(key) {
            const val = this.store.auth(key)
            return val
        },
    },
}
</script>
