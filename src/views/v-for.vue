<template>
    <div id="app-4">
        <ol>
            <li v-for="todo in todos" v-bind:key="todo.id">
                {{ todo.text }}
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            todos: [
                { text: "Text List 1" },
                { text: "Text List 2" },
                { text: "Text List 3" },
                { text: "Text List 4" },
            ],
        };
    },
};
</script>