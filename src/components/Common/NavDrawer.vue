<template>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
        permanent
        :floating="floating"
    >
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
            title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item
                prepend-icon="mdi-view-dashboard"
                title="Home"
                value="home"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-forum"
                title="About"
                value="about"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-btn
        size="small"
        color="primary"
        variant="outlined"
        @click.stop="drawer = !drawer"
    >
        弹出
    </v-btn>
</template>

<script>
export default {
    props: {
        floating: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return { drawer: false }
    },
}
</script>
