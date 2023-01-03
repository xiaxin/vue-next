<template>
    <v-card>
        <v-card-title>用户列表</v-card-title>
        <common-divider />
        <v-card-text class="pa-0">
            <common-data-table :headers="headers" :items="items">
                <template #[`item.actions`]>
                    <v-btn size="small">编辑</v-btn>
                </template>
            </common-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                {
                    text: '编号',
                    value: 'id',
                    width: '60px',
                    align: 'center',
                },
                {
                    text: '用户',
                    value: 'username',
                },
                {
                    text: '性别',
                    value: 'sex',
                },
                {
                    text: '生日',
                    value: 'birthday',
                },
                {
                    text: '',
                    value: 'actions',
                    width: '52px',
                },
            ],
            items: [
                {
                    id: 1,
                    username: 'xiaxin',
                    sex: '男',
                    birthday: '1988-07-28',
                },
                {
                    id: 2,
                    username: 'xiaxin',
                    sex: '男',
                    birthday: '1988-07-28',
                },
                {
                    id: 3,
                    username: 'xiaxin',
                    sex: '男',
                    birthday: '1988-07-28',
                },
                {
                    id: 4,
                    username: 'xiaxin',
                    sex: '男',
                    birthday: '1988-07-28',
                },
                {
                    id: 5,
                    username: 'xiaxin',
                    sex: '男',
                    birthday: '1988-07-28',
                },
            ],
        }
    },
}
</script>
