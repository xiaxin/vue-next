<template>
    <v-app-bar flat density="comfortable" class="header" >
        <layout-header-system />

        <template #append>
            <layout-header-menu />
        </template>
    </v-app-bar>
</template>

<style scoped>
.header {
    border-top: 1px solid #dcdfe6;
}
</style>