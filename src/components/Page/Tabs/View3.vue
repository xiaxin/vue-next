<template>
    <v-row no-gutters>
        <v-col cols="12" class="pa-2">
            <v-sheet elevation="6">
                <v-tabs
                    bg-color="indigo"
                    next-icon="mdi-arrow-right-bold-box-outline"
                    prev-icon="mdi-arrow-left-bold-box-outline"
                    show-arrows
                >
                    <v-tab v-for="i in 30" :key="i"> Item {{ i }} </v-tab>
                </v-tabs>
            </v-sheet>
        </v-col>
    </v-row>
</template>
