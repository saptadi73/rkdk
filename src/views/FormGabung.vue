<template>
    <div>
        <BaseInput v-model="nama"/>
        <p>{{nama}}</p>
    </div>
</template>

<script setup>
    import BaseInput from '../components/BaseInput.vue';
    import { ref } from "vue";

    const nama = ref("");
</script>

<style lang="scss" scoped>

</style>