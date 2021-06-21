<template>
    <div id="about">
        <h1>LifeCycle Page</h1>
        <img class="img-fluid img-thumbnail" src="@/assets/images/lifecycle.png" />
    </div>
</template>

<script>
export default {
    name: "lifecycle",
    data: function () {
        console.log("data");
        return {
            items: [],
        };
    },
    beforeCreate: function () {
        console.log("beforeCreate");
    },
    created: function () {
        console.log("create");
    },
    beforeMount: function () {
        console.log("beforeMount");
    },
    mounted: function () {
        console.log("mounted");
    },
    beforeDestroy: function () {
        console.log("beforeDestroy");
    },
    destroyed: function () {
        console.log("destroyed");
    },
    beforeUpdate: function () {
        console.log("beforeUpdate");
    },
    updated: function () {
        console.log("updated");
    },
};
</script>