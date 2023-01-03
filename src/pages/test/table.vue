<template>
    <common-container title="测试表格">
        <template #toolbar-action>
            <page-table-dialog label="打开" title="标题" />

            <common-reload @click="init" class="ml-2" />
        </template>
        <page-table />
    </common-container>
</template>

<script setup>
function init() {}
</script>
