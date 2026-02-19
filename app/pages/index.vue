<template>
    <div>
        <Head>
            <Meta charset="UTF-8"/>
            <Title>Home / Nuxt itProger Course / template</Title>
            <Meta name="description" content="page description, template"/>
            <Meta name="keywords" content="page keywords, template"/>
            <Meta name="robots" content=""/>
        </Head>
        <h1>Масса</h1>
        Hello World!<p/>
        <Alert color="primary" class="mb-30">
            Test Page! <br/>
            <!-- {{ data.message }} -->
        </Alert>

        <b>Ссылки:</b><br/>
        <NuxtLink to="/home" class="menu">/home</NuxtLink>
        <hr>
        Version: update 2
    </div>
</template>

<script setup lang="ts">
// useHead({
//     htmlAttrs: { lang: 'uk', },
//     title: 'Home / Nuxt itProger Course / script useHead',
//     meta: [
//         { 'charset': 'utf-8' },
//         { 'name': 'description', 'content': 'page description, script' },
//         { 'name': 'keywords', 'content': 'page keywords, script' },
//         { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0' },
//         { 'name': 'robots', 'content': '' },
//     ],
// })

// // Важно! Добавляем await, чтобы не появлялась ошибка
// // (при повторном переходе на роут): Uncaught (in promise) TypeError:
// // Cannot read properties of undefined (reading 'message')
// const { data } = await useFetch('/api/example', {
//     method: 'post',
//     body: {name: 'Alex', id: 1},
// })
// </script>

<style>
</style>