<template>
    <v-card flat rounded="0" class="overflow-visible">
        <v-toolbar
            :density="density"
            :color="color"
            class="overflow-visible px-5"
        >
            <v-toolbar-title class="ma-0">{{ title }}</v-toolbar-title>
            <slot name="toolbar-action"></slot>

            <!-- extended button -->
            <v-btn
                v-if="showExpandButton"
                variant="flat"
                :rounded="0"
                color="primary"
                size="small"
                style="
                    position: absolute;
                    right: 0;
                    bottom: -18px;
                    z-index: 999;
                "
                class="ma-0"
                @click="expand = !expand"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-toolbar>

        <v-expand-transition>
            <div v-if="expand">
                <common-divider />
                <div class="pt-4 pb-6">
                    <v-slider
                        v-model="time"
                        :max="6"
                        :step="1"
                        :ticks="labels"
                        class="mx-4"
                        color="primary"
                        density="compact"
                        hide-details
                        show-ticks="always"
                        thumb-size="10"
                    ></v-slider>
                </div>
            </div>
        </v-expand-transition>
        <common-divider />
    </v-card>
</template>

<script>
export default {
    props: {
        density: {
            type: String,
            default: 'comfortable',
        },
        title: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'white',
        },
        showExpandButton: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            labels: {
                0: 'SU',
                1: 'MO',
                2: 'TU',
                3: 'WED',
                4: 'TH',
                5: 'FR',
                6: 'SA',
            },
            expand: false,
            time: 0,
            forecast: [
                {
                    day: 'Tuesday',
                    icon: 'mdi-white-balance-sunny',
                    temp: '24\xB0/12\xB0',
                },
                {
                    day: 'Wednesday',
                    icon: 'mdi-white-balance-sunny',
                    temp: '22\xB0/14\xB0',
                },
                { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
            ],
        }
    },
}
</script>
