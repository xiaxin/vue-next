<template>
    <v-menu
        :open-on-hover="openOnHover"
        :open-delay="openDelay"
        :location="location"
    >
        <template #activator="{ props }">
            <v-btn v-bind="props">
                {{ title }}
            </v-btn>
        </template>

        <common-list class="c-list" :items="items"></common-list>
    </v-menu>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    items: {
        type: Array,
        default: () => {},
    },
    openOnHover: {
        type: Boolean,
        default: false,
    },
    openDelay: {
        type: [Number, String],
        default: 50,
    },
    location: {
        type: [String],
        default: 'bottom',
    },
})
</script>
