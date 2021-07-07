<template>
    <div class="border p-2">
        <div>child area</div>
        <p>child binding : {{ childinput }}</p>
    </div>
</template>

<script>
export default {
    props: ["childinput"],
};
</script>