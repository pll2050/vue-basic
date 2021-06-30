<template>
<div>
    <Form />
    <Select />
    <Checkbox />
    <Button />
</div>
</template>

<script>
import Form from "../components/forms/form.vue";
import Select from "../components/forms/select.vue";
import Checkbox from "../components/forms/checkbox.vue";
import Button from "../components/forms/button.vue";
export default {
    components:{
        Form,
        Select,
        Checkbox,
        Button,
    }
}
</script>