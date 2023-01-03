<template>
    <v-app>
        <v-container class="py-12">
            <v-responsive
                class="mx-auto text-center mb-12"
                style="max-width: 500px"
            >
                <!--
            <div class="text-overline secondary--text mb-3">login account</div>
            -->
                <div
                    class="transition-swing text-h3 mt-8"
                    v-text="'登录页面'"
                ></div>
            </v-responsive>

            <v-card style="max-width: 500px" class="pa-8 mx-auto">
                <v-card-text>
                    <v-form autocomplete="off">
                        <v-text-field
                            v-model="username"
                            label="系统账号"
                            variant="outlined"
                            autocomplete="username"
                        ></v-text-field>

                        <v-text-field
                            v-model="password"
                            label="系统密码"
                            hide-details
                            autocomplete="password"
                            :type="showPassword ? 'text' : 'password'"
                            :append-inner-icon="
                                showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            variant="outlined"
                            @keyup.enter.native="login"
                            @click:appendInner="showPassword = !showPassword"
                        ></v-text-field>

                        <div class="mt-3">
                            <v-btn
                                block
                                :loading="loading"
                                :disabled="loading"
                                size="x-large"
                                elevation="0"
                                blockdepressed
                                color="success"
                                @click="login"
                                >登录</v-btn
                            >
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </v-app>
</template>

<script setup>
definePageMeta({
    layout: false,
})

const sessionStore = useSessionStore()
const route = useRoute()

// page data
let showPassword = ref(false)

// form data
let loading = ref(false)
let password = ref('')
let username = ref('')
let redirect = route.query.redirect

// TODO
let apiUser = useApiUser()

console.log(apiUser)

async function login() {
    console.log(username, password, redirect)

    // const { data: mountain } = await useFetch('/api/mountains/everest', {
    //     method: 'post',
    //     pick: ['title', 'description'],
    // })

    // console.log(mountain)

    sessionStore.token = 'token'

    if (redirect == undefined) {
        return navigateTo(`/`)
    }

    return navigateTo(`${redirect}`)
}
</script>
