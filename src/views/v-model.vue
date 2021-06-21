<template>
    <div>
        <input v-model="message" placeholder="여기를 수정해보세요" />
        <p>메시지: {{ message }}</p>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            message: "",
        };
    },
};
</script>