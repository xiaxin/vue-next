<template>
    <v-container fluid class="pa-3">
        <v-card :border="border" tile elevation="0" :color="color">
            <template v-if="title.length > 0">
                <v-toolbar flat :title="title" color="white">
                    <v-spacer></v-spacer>
                    <slot name="toolbar-action"></slot>
                </v-toolbar>

                <v-divider></v-divider>
            </template>

            <template v-if="$slots.search">
                <v-container fluid class="px-4">
                    <slot name="search" />
                </v-container>
            </template>

            <slot />
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'CommonContainer',
    props: {
        title: {
            type: String,
            default: '',
        },
        border: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'transparent',
        },
    },
}
</script>
