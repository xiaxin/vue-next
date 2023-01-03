<template>
    <v-card>
        <v-card-text class="pa-0">
            <div class="bg-primary pa-5">
                <div class="text-h4">My Contacts</div>
                <div class="text-h6">Checkout my contacts here</div>
            </div>
            <v-list :items="items" item-props lines="two">
                <template v-slot:subtitle="{ subtitle }">
                    <div v-html="subtitle"></div>
                </template>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    prependAvatar:
                        'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Brunch this weekend?',
                    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                },

                {
                    prependAvatar:
                        'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Summer BBQ',
                    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                },

                {
                    prependAvatar:
                        'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Oui oui',
                    subtitle:
                        '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                },

                {
                    prependAvatar:
                        'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Birthday gift',
                    subtitle:
                        '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                },

                {
                    prependAvatar:
                        'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Recipe to try',
                    subtitle:
                        '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                },
            ],
        }
    },
}
</script>
