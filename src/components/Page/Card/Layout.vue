<template>
    <v-row no-gutters>
        <page-mini-card />
    </v-row>
    <v-row no-gutters>
        <v-col cols="4" class="pa-2">
            <page-card-timeline />
        </v-col>
        <v-col cols="4" class="pa-2">
            <page-card-explore />
        </v-col>
        <v-col cols="4">
            <page-card-horizontal />
        </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col cols="3" class="pa-2">
            <page-card-info />
        </v-col>
        <v-col cols="3" class="pa-2">
            <page-card-media />
        </v-col>
        <v-col cols="3" class="pa-2">
            <page-card-twitter />
        </v-col>
        <v-col cols="3" class="pa-2">
            <page-card-weather />
        </v-col>
        <v-col cols="3" class="pa-2">
            <page-card-loading />
        </v-col>
    </v-row>
</template>
