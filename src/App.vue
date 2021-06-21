<template>
    <div id="app">
        <Navbar />
        <div id="content" class="content container shadow p-3 mt-3 bg-body rounded">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from "./components/layout/Header.vue";

export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    margin-bottom: 30px;
}
</style>
