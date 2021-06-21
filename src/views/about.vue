<template>
    <div id="about">
        <h1>About Page</h1>
        <div v-for="item in items" v-bind:key="item.idx">
            {{ item.idx }}
        </div>
    </div>
</template>

<script>
export default {
    name: "about",
    data: function () {
        return {
            items: [{ idx: 1 }, { idx: 2 }, { idx: 3 }, { idx: 4 }],
        };
    },
};
</script>