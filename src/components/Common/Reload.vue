<template>
    <v-btn icon @click="click">
        <v-icon>mdi-reload</v-icon>
    </v-btn>
</template>

<script setup>
const emit = defineEmits(['click'])

function click() {
    emit('click')
}
</script>
