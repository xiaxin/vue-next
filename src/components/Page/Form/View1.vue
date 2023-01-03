<template>
    <v-autocomplete
        label="Autocomplete"
        :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
        ]"
    ></v-autocomplete>

    <v-combobox
        label="Combobox"
        class="mt-4"
        :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
        ]"
    ></v-combobox>

    <v-radio-group class="mt-4" inline>
        <v-radio label="Radio 1" value="1"></v-radio>
        <v-radio label="Radio 2" value="2" class="ml-2"></v-radio>
        <v-radio label="Radio 3" value="3" class="ml-2"></v-radio>
    </v-radio-group>

    <v-select
        class="mt-4"
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
    <v-switch label="Switch" class="mt-4"></v-switch>

    <v-textarea label="Label" class="mt-4"></v-textarea>

    <v-text-field label="Label" class="mt-4"></v-text-field>
</template>
