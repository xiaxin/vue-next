<template>
    <common-container color="transparent" :border="false">
        <toast-container />
        <common-row class="pa-2">
            <v-btn @click="success">正常请求</v-btn>
        </common-row>
        <common-row class="pa-2" flex>
            <v-btn @click="error(404)">请求404</v-btn>
            <v-btn @click="error(400)" class="ml-2">请求400</v-btn>
            <v-btn @click="error(502)" class="ml-2">请求502</v-btn>
            <v-btn @click="error(500)" class="ml-2">请求500</v-btn>
            <v-btn @click="error(504)" class="ml-2">请求504</v-btn>
        </common-row>
    </common-container>
</template>

<script>
export default {
    setup() {},
    data() {
        return {
            message: [],
            loading: false,
        }
    },
    mounted() {},
    methods: {
        success() {
            // useRequest('/api/nitro/ping', {
            //     method: 'get',
            // }).then((response) => {
            //     console.log('[response]', response)
            // })
            $toast.success('请求成功')
        },
        error(code) {
            useRequest('/api/nitro/error', {
                method: 'get',
                query: {
                    code: code,
                },
            })
                .then((response) => {
                    console.log('[response]', response)
                })
                .catch((error) => {
                    console.log('[error]', error, error.value)
                })
                .finally(() => {
                    this.loading = false
                })
        },
    },
}
</script>
