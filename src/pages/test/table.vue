<template>
    <common-toolbar title="测试表格" :show-expand-button="true">
        <template #toolbar-action>
            <page-table-dialog label="打开" title="标题" />

            <common-reload @click="init" class="ml-2" />
        </template>
    </common-toolbar>
    <page-table />
</template>

<script setup>
function init() {}
</script>
