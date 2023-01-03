<template>
    <v-dialog
        v-model="dialog"
        :fullscreen="fullscreen"
        :persistent="persistent"
    >
        <template #activator="{ props }">
            <v-btn color="primary" variant="outlined" v-bind="props">
                {{ label }}
            </v-btn>
        </template>

        <template #default="{ isActive }">
            <v-card>
                <v-toolbar flat :title="title" color="white">
                    <v-spacer></v-spacer>

                    <v-btn variant="outlined" @click="fullscreen = !fullscreen"
                        >fullscreen</v-btn
                    >

                    <v-btn
                        variant="outlined"
                        @click="persistent = !persistent"
                        class="ml-2"
                    >
                        persistent
                    </v-btn>
                </v-toolbar>

                <v-divider></v-divider>

                <v-card-text class="pa-3">
                    <template v-if="loading">
                        <v-progress-linear
                            indeterminate
                            class="my-3"
                        ></v-progress-linear>
                    </template>
                </v-card-text>

                <common-divider />

                <v-card-actions class="pa-3">
                    <v-spacer></v-spacer>

                    <v-btn variant="outlined" @click="loading = !loading"
                        >Loading</v-btn
                    >

                    <v-btn variant="outlined" @click="isActive.value = false"
                        >Close Dialog</v-btn
                    >
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        fullscreen: {
            type: Boolean,
            default: false,
        },
        persistent: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            dialog: false,
            loading: false,
        }
    },
}
</script>
