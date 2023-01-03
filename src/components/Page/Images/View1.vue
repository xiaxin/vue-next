<template>
    <v-row no-gutters>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex pa-2" cols="4">
            <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                class="grey lighten-2"
            >
                <template #placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
    </v-row>
</template>
