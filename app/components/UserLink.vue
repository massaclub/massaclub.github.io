<template>
    <NuxtLink :to="'/users/user-' + user.id">{{ user.firstName }} {{ user.lastName }}</NuxtLink>
</template>

<script setup lang="ts">
const { user } = defineProps(['user'])
</script>