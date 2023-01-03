export default definePiniaStore('toast', {
    state: () => {
        return {
            /**
             * item = {
             *     id: '', // ID
             *     type: 'success',          // 类型
             *     icon: 'mdi-check-circle', // 图标
             *     duration: 1000,           // 超时时间
             *     message: '',              // 错误信息
             * }
             */

            messages: {},
        }
    },
    getters: {},
    actions: {
        add(message, context) {
            message.id = new Date().getTime()
            message.context = this.context(context)
            console.log(message)
            this.messages[message.id] = message
        },
        remove(id) {
            delete this.messages[id]
        },
        duration(duration) {
            return duration || 2000
        },
        context(context) {
            console.log(context)
            return context || {}
        },

        success(message, duration, context) {
            this.add(
                {
                    type: 'success',
                    message: message,
                    duration: this.duration(duration), // TODO 全局设置
                },
                context,
            )
        },
        error(message, duration, context) {
            this.add(
                {
                    type: 'error',
                    message: message,
                    duration: this.duration(duration), // TODO 全局设置
                },
                context,
            )
        },
    },
})
