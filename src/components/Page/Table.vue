<template>
    <common-data-table
        density="default"
        :headers="headers"
        :items="desserts"
        :fixed-header="true"
        :height="null"
        :loading="loading"
        filter-columns
        show-select
        v-model="selected"
    >
        <!-- header -->
        <template #header>
            <v-form>
                <common-row flex class="pa-3">
                    <div style="width: 200px">
                        <v-text-field
                            hide-details
                            density="comfortable"
                            variant="outlined"
                            label="TextField"
                        ></v-text-field>
                    </div>
                    <div style="width: 200px" class="ml-3">
                        <v-autocomplete
                            density="comfortable"
                            variant="outlined"
                            hide-details
                            label="Autocomplete"
                            :items="[
                                'California',
                                'Colorado',
                                'Florida',
                                'Georgia',
                                'Texas',
                                'Wyoming',
                            ]"
                            multiple
                        ></v-autocomplete>
                    </div>
                    <div style="width: 400px" class="ml-3">
                        <v-combobox
                            density="comfortable"
                            variant="outlined"
                            hide-details
                            label="Combobox"
                            :items="[
                                'California',
                                'Colorado',
                                'Florida',
                                'Georgia',
                                'Texas',
                                'Wyoming',
                            ]"
                            multiple
                        ></v-combobox>
                    </div>

                    <div style="width: 200px" class="ml-3">
                        <v-select
                            density="comfortable"
                            variant="outlined"
                            hide-details
                            label="Select"
                            :items="[
                                'California',
                                'Colorado',
                                'Florida',
                                'Georgia',
                                'Texas',
                                'Wyoming',
                            ]"
                        ></v-select>
                    </div>

                    <div style="width: 200px" class="ml-3">
                        <v-file-input
                            density="comfortable"
                            variant="outlined"
                            hide-details
                            accept="image/png, image/jpeg, image/bmp"
                            prepend-icon=""
                            append-inner-icon="mdi-camera"
                            label="FileInput"
                        ></v-file-input>
                    </div>
                </common-row>

                <common-row flex class="px-3 pb-3">
                    <div style="width: 300px" class="d-flex align-center">
                        <v-radio-group inline hide-details>
                            <v-radio label="Radio 1" value="1"></v-radio>
                            <v-radio label="Radio 2" value="2"></v-radio>
                            <v-radio label="Radio 3" value="3"></v-radio>
                        </v-radio-group>
                    </div>

                    <div style="width: 200px" class="ml-3 d-flex align-center">
                        <v-slider
                            density="comfortable"
                            variant="outlined"
                            hide-details
                        ></v-slider>
                    </div>
                    <div style="width: 400px" class="ml-3 d-flex align-center">
                        <v-range-slider
                            :model-value="[-5, 5]"
                            density="comfortable"
                            variant="outlined"
                            hide-details
                            :max="10"
                            :min="-10"
                            :step="1"
                        >
                            <template v-slot:prepend>
                                <v-text-field
                                    value="-5"
                                    hide-details
                                    single-line
                                    type="number"
                                    variant="outlined"
                                    density="compact"
                                    style="width: 70px"
                                    @change="$set(range, 0, $event)"
                                ></v-text-field>
                            </template>
                            <template v-slot:append>
                                <v-text-field
                                    value="5"
                                    hide-details
                                    single-line
                                    type="number"
                                    variant="outlined"
                                    style="width: 70px"
                                    density="compact"
                                    @change="$set(range, 1, $event)"
                                ></v-text-field>
                            </template>
                        </v-range-slider>
                    </div>
                    <div style="width: 100px" class="ml-3">
                        <v-switch
                            density="comfortable"
                            model-value="red"
                            label="red"
                            color="red"
                            value="red"
                            hide-details
                        ></v-switch>
                    </div>
                </common-row>
                <!-- date -->
                <common-row flex class="px-3 pb-3">
                    <div style="width: 200px">
                        <common-date-picker
                            v-model="date"
                            label="date"
                            :hint="date"
                            format="YYYY-MM-DD"
                            value-format="YYYY-MM-DD"
                        />
                    </div>
                    <!-- TODO -->
                    <div style="width: 200px" class="ml-3">
                        <common-date-picker
                            v-model="month"
                            label="month"
                            type="month"
                            :hint="month"
                        />
                    </div>
                    <div style="width: 200px" class="ml-3">
                        <common-date-picker
                            v-model="year"
                            label="year"
                            type="year"
                            :hint="year"
                            value-format="YYYY"
                        />
                    </div>
                    <div style="width: 400px" class="ml-3">
                        <common-date-picker
                            v-model="dates"
                            label="dates"
                            type="dates"
                            :hint="dates"
                            value-format="YYYY-MM-DD"
                        />
                    </div>
                </common-row>
                <common-row flex class="px-3 pb-3">
                    <div style="width: 412px">
                        <common-date-picker
                            v-model="rangedates"
                            label="dates"
                            type="daterange"
                            :hint="rangedates"
                            value-format="YYYY-MM"
                        />
                    </div>
                    <div style="width: 412px" class="ml-3">
                        <common-date-picker
                            v-model="rangemonth"
                            label="dates"
                            type="monthrange"
                            :hint="rangemonth"
                            value-format="YYYY-MM"
                        />
                    </div>

                    <div class="ml-2" style="margin-top: 2px">
                        <v-btn size="large" variant="outlined" @click="search"
                            >搜索</v-btn
                        >
                    </div>
                </common-row>
            </v-form>
        </template>

        <!-- item -->
        <template #[`item.actions`]="{ item }">
            <v-btn size="small">按钮</v-btn>
        </template>

        <template #[`item.chip`]="{ item }">
            <v-chip class="ma-2" color="primary" variant="outlined">
                User Account
                <v-icon end icon="mdi-account-outline"></v-icon>
            </v-chip>
        </template>
    </common-data-table>
</template>

<script setup>
const date = ref('')
const month = ref('')
const year = ref('')
const dates = ref([])
const rangedates = ref([])
const rangemonth = ref([])

const selected = ref([])

let loading = ref(false)
let headers = [
    { text: 'hr1', value: 'name', width: '200px', fixedLeft: true },
    { text: 'hr2', value: 'calories', width: '200px', fixedLeft: true },
    { text: 'desc1', value: 'desc1', width: '400px' },
    { text: 'desc2', value: 'desc2', width: '400px' },
    { text: 'desc3', value: 'desc3', width: '400px', hide: true },
    {
        text: '隐藏的字段',
        value: 'hide',
        width: '400px',
        hide: true,
    },
    { text: '', width: '155px' },
    { text: 'chip', value: 'chip', width: '155px', fixedRight: true },
    { text: 'actions', value: 'actions', width: '84px', fixedRight: true },
]
let desserts = ref([
    {
        id: 1,
        name: 'Frozen Yogurt',
        calories: 1591,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
    {
        id: 2,
        name: 'Ice cream sandwich',
        calories: 237,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
    {
        id: 3,
        name: 'Eclair',
        calories: 262,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
    {
        id: 4,
        name: 'Cupcake',
        calories: 305,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
    {
        id: 5,
        name: 'Gingerbread',
        calories: 356,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
    {
        id: 6,
        name: 'Jelly bean',
        calories: 375,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
    {
        id: 7,
        name: 'Lollipop',
        calories: 392,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
    {
        id: 8,
        name: 'Honeycomb',
        calories: 408,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
    {
        id: 9,
        name: 'Donut',
        calories: 452,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
    {
        id: 10,
        name: 'KitKat',
        calories: 518,
        desc1: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc2: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        desc3: '{ "name": "Frozen Yogurt", "calories": 1591, "description": "" }',
        hide: "I'm hide!",
        chip: 'chip',
    },
])

function search() {
    loading.value = !loading.value
    console.log(selected)
}
</script>
