<template>
    <v-list-item
        :title="item.title || item.name"
        :to="item.to || item.url"
        :href="item.href"
        :rel="item.href ? 'nofollow' : undefined"
        :target="item.href ? '_blank' : undefined"
        color="primary"
        density="compact"
        :append-icon="appendIcon"
        :prepend-icon="prependIcon"
        class="v-list-item--link"
        @click="item.click ? item.click() : undefined"
    >
        <!-- prepend -->
        <template #prepend="{ isActive }">
            <template v-if="prepend(isActive) != ''">
                <v-icon size="small" :icon="prepend(isActive)" />
            </template>
        </template>

        <!-- append -->
        <template #append="{ isActive }" v-if="level == 1 && isGroup">
            <v-icon size="small" :icon="icon(isActive)"></v-icon>
        </template>
    </v-list-item>
</template>

<script>
export default {
    name: 'CommonListItem',

    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
        level: {
            type: Number,
            default: 0,
        },
        appendIcon: {
            type: String,
            default: '',
        },
        prependIcon: {
            type: String,
            default: '',
        },
    },
    computed: {
        isGroup() {
            let length =
                this.item.children == null ? 0 : this.item.children.length

            return length != 0
        },
    },
    methods: {
        prepend(isActive) {
            if (this.level == 1 && this.item.icon) {
                return this.item.icon
            }

            if (this.level == 2 && !this.isGroup) {
                return 'mdi-circle-medium'
            }

            if (this.level == 2 && this.isGroup) {
                return this.icon(isActive)
            }
            return ''
        },

        icon(isActive) {
            if (isActive) {
                return 'mdi-chevron-up'
            }
            return 'mdi-chevron-down'
        },
    },
}
</script>
