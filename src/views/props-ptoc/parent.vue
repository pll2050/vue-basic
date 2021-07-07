<template>
    <div class="border p-2">
        <div class="border p-2 m-5 shadow-sm">
            <div>Parent 1</div>
            <input type="text" class="" v-model="inputData1" />
            <button @click="input1()">input</button>
            <p>input : {{ inputData1 }}</p>
            <Child v-bind:childinput="inputData1" />
        </div>
        <div class="border p-2 m-5 shadow-sm">
            <div>Parent 2</div>
            <input type="text" class="" v-model="inputData2" />
            <button @click="input2()">input</button>
            <p>input : {{ inputData2 }}</p>
            <Child v-bind:childinput="inputData2" />
        </div>
    </div>
</template>

<script>
import Child from "./child.vue";
export default {
    data() {
        return {
            inputData1: "",
            inputData2: "",
        };
    },
    components: {
        Child,
    },
    methods: {
        input1() {
            console.log(this.inputData1);
        },
        input2() {
            console.log(this.inputData2);
        },
    },
};
</script>