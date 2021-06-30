<template>
    <div class="border p-3 mb-2">
        <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group id="checkbox-group-1" v-model="selected" :options="array" :aria-describedby="ariaDescribedby" name="flavour-1" />
        </b-form-group>

        <b-form-group label="Using sub-components:" v-slot="{ ariaDescribedby2 }">
            <b-form-checkbox-group id="checkbox-group-2" v-model="selected" :aria-describedby="ariaDescribedby2" name="flavour-2">
                <b-form-checkbox value="orange">Orange</b-form-checkbox>
                <b-form-checkbox value="apple">Apple</b-form-checkbox>
                <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
                <b-form-checkbox value="grape">Grape</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>

        <div>
            Selected: <strong>{{ selected }}</strong>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: [], // Must be an array reference!
            array: [
                { text: "Orange", value: "orange" },
                { text: "Apple", value: "apple" },
                { text: "Pineapple", value: "pineapple" },
                { text: "Grape", value: "grape" },
            ],
        };
    },
};
</script>