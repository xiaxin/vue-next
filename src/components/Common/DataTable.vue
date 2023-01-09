<template>
    <template v-if="!!useSlots()[`header`]">
        <slot name="header" />
        <v-divider />
    </template>

    <template v-if="filterColumns">
        <common-row flex style="background-color: #ffffff">
            <template v-for="(header, index) in tableHeaders" :key="index">
                <div v-if="header.hide != null" class="d-flex mr-2">
                    <v-checkbox
                        v-model="tableHeaders[index].show"
                        :label="header.text"
                        hide-details
                    ></v-checkbox>
                </div>
            </template>
        </common-row>
        <common-divider />
    </template>

    <template v-if="loading">
        <v-progress-linear
            color="deep-purple-accent-4"
            indeterminate
            height="3"
        ></v-progress-linear>
    </template>

    <v-table :density="density" :fixed-header="fixedHeader" :height="height">
        <thead>
            <tr>
                <template v-if="showSelect">
                    <th
                        class="fixed-column-left"
                        :style="{
                            width: '60px',
                            minWidth: '60px',
                            left: '0px',
                        }"
                    >
                        <v-checkbox
                            density="compact"
                            hide-details
                            v-model="selectAll"
                            :indeterminate="indeterminate"
                        ></v-checkbox>
                    </th>
                </template>
                <template v-for="(header, index) in tableHeaders" :key="index">
                    <th
                        v-if="header.show"
                        :ref="`ref-th-` + index"
                        :class="{
                            'fixed-column-left': header.fixedLeft,
                            'fixed-column-right': header.fixedRight,
                            'text-center': header.align == 'center',
                            'text-left': header.align == 'left',
                            'text-right': header.align == 'right',
                        }"
                        :style="{
                            width: header.width ? header.width : null,
                            minWidth: header.width ? header.width : null,
                            left: left(index),
                            right: header.fixedRight
                                ? index != tableHeaders.length - 1
                                    ? tableHeaders[index + 1].width != null
                                        ? tableHeaders[index + 1].width
                                        : 0
                                    : 0
                                : null,
                        }"
                    >
                        {{ header.text }}
                    </th>
                </template>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(item, i) in items" :key="item.name">
                <template v-if="showSelect">
                    <td
                        class="fixed-column-left"
                        :style="{
                            width: '60px',
                            minWidth: '60px',
                            left: '0px',
                        }"
                    >
                        <v-checkbox
                            v-model="selected"
                            density="compact"
                            :value="item[itemKey]"
                            hide-details
                        ></v-checkbox>
                    </td>
                </template>
                <template
                    v-for="(header, index) in tableHeaders"
                    :key="`tr:` + i + ` td:` + index"
                >
                    <td
                        v-if="header.show"
                        :class="{
                            'fixed-column-left': header.fixedLeft,
                            'fixed-column-right': header.fixedRight,
                            'text-center': header.align == 'center',
                            'text-left': header.align == 'left',
                            'text-right': header.align == 'right',
                        }"
                        :style="{
                            width: header.width ? header.width : null,
                            minWidth: header.width ? header.width : null,
                            left: left(index),

                            right: header.fixedRight
                                ? index != tableHeaders.length - 1
                                    ? tableHeaders[index + 1].width != null
                                        ? tableHeaders[index + 1].width
                                        : 0
                                    : 0
                                : null,
                        }"
                    >
                        <template v-if="!!useSlots()[`item.` + header.value]">
                            <slot :name="`item.` + header.value" :item="item" />
                        </template>

                        <template v-else>
                            {{ item[header.value] }}
                        </template>
                    </td>
                </template>
            </tr>
        </tbody>
    </v-table>

    <v-divider />

    <common-row v-if="showPagination">
        <div class="d-flex justify-end py-2 px-3 pagination">
            <div class="d-flex align-center">
                <div class="text-caption">Rows per page</div>
                <div class="ml-3">
                    <v-select
                        v-model="limit"
                        density="compact"
                        variant="outlined"
                        hide-details
                        :items="paginationSelectItems"
                        item-title="key"
                        item-value="val"
                    ></v-select>
                </div>
            </div>
            <div class="d-flex align-center">
                <v-pagination
                    v-model="page"
                    density="compact"
                    :length="15"
                    :total-visible="7"
                    class="justify-end"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
                    size="small"
                ></v-pagination>
            </div>
        </div>
    </common-row>
</template>

<script setup>
let page = ref(1)
let limit = ref(10)
let val = ref(false)
</script>

<script>
export default {
    props: {
        modelValue: {
            type: Array,
            default: () => {
                return []
            },
        },
        loading: {
            type: Boolean,
            default: false,
        },
        density: {
            type: String,
            default: 'default',
        },
        items: {
            type: Array,
            default: () => {},
        },
        headers: {
            type: Array,
            default: () => {},
        },
        height: {
            type: [String, Number],
            default: null,
        },
        fixedHeader: {
            type: Boolean,
            default: false,
        },
        filterColumns: {
            type: Boolean,
            default: false,
        },
        showPagination: {
            type: Boolean,
            default: true,
        },
        showSelect: {
            type: Boolean,
            default: false,
        },

        itemKey: {
            type: String,
            default: 'id',
        },
    },
    data() {
        return {
            tableHeaders: this.headers.map((item) => {
                item.show = true
                if (item.hide != null) {
                    item.show = !item.hide
                }
                return item
            }),
            selected: this.modelValue,
            selectAll: false,
            indeterminate: false,
        }
    },
    computed: {
        paginationSelectItems() {
            let items = [10, 20, 30, -1]
            let newItems = items.map((item) => {
                let key = item
                let val = item
                return {
                    key: key == -1 ? 'ALL' : key,
                    val: val,
                }
            })
            return newItems
        },
    },
    watch: {
        selected(newValue, oldValue) {
            if (this.selected.length == 0) {
                this.selectAll = false
                this.indeterminate = false
            } else if (this.selected.length != this.items.length) {
                this.indeterminate = true
            } else {
                this.selectAll = true
                this.indeterminate = false
            }
            this.$emit('update:modelValue', newValue)
        },
        selectAll(newValue, oldValue) {
            if (newValue == true) {
                let items = []
                for (let i in this.items) {
                    const val = this.items[i][this.itemKey]
                    items.push(val)
                }

                this.selected = items
            } else {
                this.selected = []
            }
        },
    },
    methods: {
        left(index) {
            const headers = this.tableHeaders
            const header = this.tableHeaders[index]

            if (!header.fixedLeft) {
                return null
            }

            let width = 0

            if (index > 0) {
                for (let i in headers) {
                    if (i > 0) {
                        if (i > index) {
                            break
                        }
                        let otherHeader = headers[i - 1]

                        width +=
                            otherHeader.width != undefined
                                ? parseInt(this.parseWidth(otherHeader.width))
                                : 0
                    }
                }
            }

            return (this.showSelect ? width + 60 : width) + 'px'
        },
        parseWidth(value) {
            if (value.slice(-2) == 'px') {
                return value.slice(0, value.length - 2)
            }
            return value
        },
    },
}
</script>

<style lang="scss" scoped>
table {
    border-collapse: separate;
    table-layout: fixed;
    width: 100%; /* 固定寬度 */

    thead tr th {
        position: sticky;
        top: 0; /* 第一列最上 */
    }

    tbody {
        tr:hover > td {
            background-color: #e5e7eb !important;
        }
    }

    // td:first-child,
    // th:first-child,
    // td:last-child,
    // th:last-child
    .fixed-column-left,
    .fixed-column-right {
        position: sticky;
        background-color: #ffffff;
    }

    // th:first-child,
    // td:first-child,
    .fixed-column-left {
        left: 0; /* 首行在左 */
        border-right: 1px solid #e5e7eb;
    }

    // th:last-child,
    // td:last-child
    .fixed-column-right {
        right: 0; /* 首行在左 */
        border-left: 1px solid #e5e7eb;
    }

    // th:first-child,
    // th:last-child
    th.fixed-column-left,
    th.fixed-column-right {
        z-index: 2 !important;
    }
    // td:first-child,
    // th:last-child,

    td.fixed-column-left,
    td.fixed-column-right {
        z-index: 1 !important;
    }
}
</style>
