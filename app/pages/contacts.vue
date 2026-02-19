<template>
    <h1>Contacts</h1>
    <div>Count: {{ store.count }}</div>
    <div>Name: {{ store.name }}</div><p/>

    <Alert color="warning">
        {{ data.message }}
    </Alert>
</template>

<script setup lang="ts">
// import { useCounterStore } from '~/stores/counter.ts'

useHead({
    htmlAttrs: { lang: 'uk', },
    title: 'Contacts / Nuxt itProger Course / script useHead',
    meta: [
        { 'charset': 'utf-8' },
        { 'name': 'description', 'content': 'page description, script' },
        { 'name': 'keywords', 'content': 'page keywords, script' },
        { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0' },
        { 'name': 'robots', 'content': '' },
    ],
})

// this line is usually inside a function that is able to retrieve
// the pinia instance
const store = useCounterStore()
console.log('store: ', store);

// Важно! Добавляем await, чтобы не появлялась ошибка
// (при повторном переходе на роут): Uncaught (in promise) TypeError:
// Cannot read properties of undefined (reading 'message')
const { data } = await useFetch('/api/example', {
    method: 'post',
    body: {name: 'Alex eze', id: 1},
})
</script>

<style scoped>
    h1 { font-size: 3rem; }
</style>