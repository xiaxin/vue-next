<template>
    <v-alert class="ma-3" type="success">
        Welcome to system. (x:{{ x }} y:{{ y }})
    </v-alert>
</template>

<script setup>
const { x, y } = useMouse()

console.log(useAppStore())
</script>
