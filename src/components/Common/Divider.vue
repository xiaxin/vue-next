<template>
    <div class="divider divider-horizontal">
        <div
            :class="{
                'divider-text': true,
                'divider-text-center':
                    this.textAlign == 'center' ? true : false,
                'divider-text-left': this.textAlign == 'left' ? true : false,
                'divider-text-right': this.textAlign == 'right' ? true : false,
            }"
        >
            <slot />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        textAlign: {
            type: String,
            default: 'center',
        },
    },
}
</script>

<style lang="scss" scoped>
.divider {
    position: relative;
}

.divider-horizontal {
    display: block;
    height: 1px;
    width: 100%;
    border-top: 1px solid #dcdfe6;
}
.divider-text {
    position: absolute;
    background-color: #ffffff;
    padding: 0 15px;
    font-weight: 500;
    color: #303133;
    font-size: 12px;
}

.divider-text-left {
    left: 20px;
    transform: translateY(-50%);
}
.divider-text-center {
    left: 50%;
    transform: translate(-50%) translateY(-50%);
}
.divider-text-right {
    right: 20px;
    transform: translateY(-50%);
}
</style>
