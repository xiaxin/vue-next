<template>
    <v-list density="compact" nav>
        <template v-for="(item, i) in items">
            <!-- subheader -->
            <v-list-subheader
                v-if="item.heading"
                :key="`heading-${i}`"
                class="text--primary font-weight-black text-uppercase"
                v-text="item.heading"
            />

            <!-- divider == true -->
            <common-divider
                v-else-if="item.divider"
                :key="`divider-${i}`"
                class="mt-3 mb-3"
                :text-align="item.align"
            >
                {{ item.label }}
            </common-divider>

            <!-- item.items 不为空 -->
            <common-list-group
                v-else-if="item.children"
                :key="`group-${i}`"
                :item="item"
                :level="level"
            />

            <!-- item 
            <slot
                v-else-if="$scopedSlots.item"
                name="item"
                :index="i"
                :item="item"
            />
-->
            <common-list-item
                v-else
                :key="`item-${i}`"
                :item="item"
                :level="level"
            />
        </template>
    </v-list>
</template>

<script setup>
const props = defineProps({
    items: {
        type: [Array],
        default: () => [],
    },
})
const level = 1
</script>
