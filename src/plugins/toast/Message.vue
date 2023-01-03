<template>
    <v-card
        variant="elevated"
        :color="type"
        class="mb-4 toast-snackbar-message toast-message d-flex flex-column"
        :class="[
            {
                'shake-baby-shake': hashShake,
            },
        ]"
    >
        <v-toolbar
            :color="type"
            class="text-subtitle-1 pa-4 w-100 flex-column"
            density="compact"
            height="46"
        >
            <v-icon :icon="icon"></v-icon>
            <div class="text-subtitle-2 mx-4">
                {{ message }}
            </div>
            <v-spacer></v-spacer>

            <v-icon icon="mdi-close" size="x-small" @click="remove"></v-icon>
        </v-toolbar>

        <template v-if="context.message && context.message.length > 0">
            <common-divider />
            <v-card-text class="flex-column">
                <div class="text-subtitle-2 mx-0">
                    请求 {{ context.message }}
                </div>
            </v-card-text>
        </template>
    </v-card>
</template>

<script>
export default {
    props: {
        id: {
            type: [String, Number],
            default: '',
        },
        type: {
            type: [String],
            default: 'success',
        },
        message: {
            type: String,
            default: '',
        },
        duration: {
            type: [Number],
            default: 2000,
        },
        context: {
            type: [String, Object],
            default: () => {},
        },
    },
    setup() {},
    data() {
        return {
            // message: '信息 aa bb cc dd ',
            // duration: 1000,
            // TODO
            hashShake: false,
        }
    },
    mounted() {
        setTimeout(this.remove, this.duration)
    },
    computed: {
        icon() {
            if (this.type == 'success') {
                return 'mdi-check-circle'
            }

            if (this.type == 'error') {
                return 'mdi-close-circle'
            }

            if (this.type == 'info') {
                return 'mdi-information'
            }

            if (this.type == 'warning') {
                return 'mdi-alert-circle'
            }
            return 'mdi-check-circle'
        },
    },
    methods: {
        remove() {
            // TODO 抛出事件，会发生不处理情况。
            return $toast.remove(this.id)
        },
    },
}
</script>
