<template>
    <teleport :to="'body'">
        <section
            class="toast--container toast-snackbar is-top is-right"
            style="z-index: 2000"
        >
            <transition-group name="snackbar-message">
                <Message
                    v-for="item in items"
                    :key="`key` + item.id"
                    :id="item.id"
                    :type="item.type"
                    :message="item.message"
                    :context="item.context"
                    :duration="item.duration"
                ></Message>
            </transition-group>
        </section>
    </teleport>
</template>

<script>
import Message from './Message.vue'

export default {
    setup() {},
    components: {
        Message,
    },
    data() {
        return {}
    },
    mounted() {},
    computed: {
        items() {
            return $toast.messages
        },
    },
    methods: {},
}
</script>
