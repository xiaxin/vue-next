import { ref, onMounted, onUnmounted } from 'vue'

// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
    // 被组合式函数封装和管理的状态
    const x = ref(0)
    const y = ref(0)

    // 组合式函数可以随时更改其状态。
    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    // 挂载
    onMounted(() => {
        window.addEventListener('mousemove', update)
        console.log('[mounted] [composable] [mouse]')
    })

    // 卸载
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
        console.log('[un-mounted] [composable] [mouse]')
    })

    // 通过返回值暴露所管理的状态
    return { x, y }
}

export function useApiUser() {
    // 通过返回值暴露所管理的状态
    return { api: 'ok' }
}
