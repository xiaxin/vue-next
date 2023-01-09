<template>
    <v-app>
        <!-- aside -->
        <layout-aside />
        <!-- main -->
        <v-main>
        <!-- header -->
        <layout-header />
            <!-- slot -->
            <slot />
        </v-main>
    </v-app>
</template>
