<template>
    <div id="about">
        <h1>Axios - get</h1>
        <div id="app">
            <p>Axios는 http비동기 통신 라이브러리 입니다. RestAPI의 URL을 통해 데이터를 주고 받을 수 있습니다.</p>
            <div v-if="hasResult">
                <div v-for="post in posts" v-bind:key="post.id">
                    <h1>{{ post.id }}</h1>
                    <p>{{ post.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    data: function () {
        return {
            posts: [],
        };
    },
    computed: {
        hasResult: function () {
            return this.posts.length > 0;
        },
    },

    methods: {},
    created: function () {
        const baseURI = "https://jsonplaceholder.typicode.com";
        this.$http.get(`${baseURI}/posts`).then((result) => {
            console.log(result);
            this.posts = result.data;
        });
    },
};
</script>