<template>
    <div>
        <h1>Гостевая книга</h1>
    </div>
</template>

<script setup lang="ts">
// import { useCounterStore } from '~/stores/counter.ts'
definePageMeta({
    layout: 'default-velotrip'
})

useHead({
    htmlAttrs: { lang: 'ru', },
    title: 'Velotrip - ex Покатушки.org.ua',
    meta: [
        { 'charset': 'utf-8' },
        { 'name': 'description', 'content': '' },
        { 'name': 'keywords', 'content': '' },
        { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0' },
        { 'name': 'robots', 'content': '' },
    ],
})
</script>

<style>
</style>