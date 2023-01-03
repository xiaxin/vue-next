<template>
    <el-date-picker
        v-model="date"
        :type="type"
        :placeholder="label"
        :format="format"
        :value-Format="valueFormat"
        size="large"
    >
    </el-date-picker>
    <div v-if="!hideDetails" class="v-input__details">
        <div class="v-messages">{{ hint }}</div>
        <!---->
    </div>
</template>

<script>
import { valueEquals } from 'element-plus'

export default {
    props: {
        modelValue: {
            type: [String, Date, Array, Number],
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'date',
        },
        hint: {
            string: String,
            default: '',
        },
        hideDetails: {
            type: Boolean,
            default: false,
        },
        format: {
            type: String,
            default: null,
        },
        valueFormat: {
            type: String,
            default: null,
        },
    },
    computed: {
        date: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            },
        },
    },
    data() {
        return {}
    },
}
</script>

<style lange="scss" scope>
.el-date-editor {
    width: 100% !important;
    height: 48px !important;
    font-size: 14px !important;
}
</style>
