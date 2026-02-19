<template>
    <div>
        <h1>User ID: {{ user_id }}</h1>
    </div>
</template>

<script setup lang="ts">
    const { user_id } = useRoute().params
    // для использования такой записи не забываем указывать
    // в <script> слово setup
    definePageMeta({
        layout: 'users'
    })
</script>

<style scoped>
    h1 { font-size: 3rem; }
</style>