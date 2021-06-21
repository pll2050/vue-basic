<template>
    <div>
        <button type="button" @click="isVisible">{{isActive}}</button>
        <div v-if="isActive">test</div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            isActive: true,
        };
    },
    methods: {
        isVisible: function () {
            return this.isActive = !this.isActive;
        },
    },
};
</script>