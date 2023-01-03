<template>
    <v-list-group :subgroup="subgroup">
        <template #activator="{ props }">
            <common-list-item
                class="v-list-item--link"
                v-bind="props"
                :item="item"
                :level="level"
            />
        </template>

        <template v-for="(child, i) in item.children">
            <v-list-subheader
                v-if="child.heading || child.type == 4"
                :key="`heading-${i}`"
                class="text--primary font-weight-black text-uppercase ml-8"
                inset
                v-text="child.heading || child.name"
            />

            <common-divider
                v-else-if="child.divider || child.type == 5"
                :key="`divider-${i}`"
                inset
                class="mt-3 mb-2 ml-10"
                :text-align="item.align"
            />

            <common-aside-group
                v-else-if="child.children && child.children.length > 0"
                :key="`sub-group-${i}`"
                :item="child"
                :level="level + 1"
                subgroup
            />

            <common-list-item
                v-else
                :key="`child-${i}`"
                :item="child"
                :level="level + 1"
            />
        </template>
    </v-list-group>
</template>

<script>
export default {
    name: 'CommonAsideGroup',

    props: {
        item: {
            type: Object,
            default: () => ({}),
        },
        level: {
            type: Number,
            default: 0,
        },
        subgroup: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        model: null,
    }),

    computed: {
        group() {
            const group = this.genGroup(this.item.children)

            return group
        },
        icon() {
            if (!this.item.icon) return undefined

            const [off, on] = this.item.icon.split(':')

            return this.model ? on || off : off
        },
    },

    methods: {
        genGroup(items) {
            return items
                .reduce((acc, cur) => {
                    let url = cur.url
                    if (cur.children && cur.children.length > 0) {
                        url = this.genGroup(cur.children)
                    }

                    acc.push(url)
                    return acc
                }, [])
                .join('|')
        },
    },
}
</script>
