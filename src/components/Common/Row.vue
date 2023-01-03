<template>
    <v-row no-gutters>
        <v-col
            cols="12"
            :class="{
                'd-flex': flex,
            }"
        >
            <slot />
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        flex: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
