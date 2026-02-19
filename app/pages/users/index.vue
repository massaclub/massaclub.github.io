<template>
    <div>
        <h1>All Users</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <LazyUserLink :user="user"/>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'users'
})

useHead({
    htmlAttrs: { lang: 'uk', },
    title: 'Users - All / Nuxt itProger Course / script useHead',
    meta: [
        { 'charset': 'utf-8' },
        { 'name': 'description', 'content': 'page description, script' },
        { 'name': 'keywords', 'content': 'page keywords, script' },
        { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0' },
        { 'name': 'robots', 'content': '' },
    ],
})

// const users = ref([
//     { id: 1, firstName: 'Alex'},
//     { id: 2, firstName: 'Bob'},
//     { id: 3, firstName: 'John'},
// ])

// // Используем useFetch
// const { data } = await useFetch('https://dummyjson.com/users')
// const users = ref(data.value.users)

// Используем axios (альтернатива useFetch) - простой пример
import axios from 'axios' // Импортируем axios
const response = await axios.get('https://dummyjson.com/users')
const users = ref(response.data.users)

// // Используем axios (альтернатива useFetch) - полный пример
// import axios from 'axios' // Импортируем axios

// const users = ref(null)
// const error = ref(null)

// async function getUsers() {
//     // store.commit('SetIsUsersLoading', true)
//     try {
//         const response = await axios.get('https://dummyjson.com/users')
//         users.value = response.data.users;
//         // console.log('response.data.users: ', response.data.users);
//     } catch (e) {
//         error.value = `Ошибка при загрузке данных: ${e.message}`;
//     // } finally {
//     //     store.commit('SetIsUsersLoading', false)
//     } // try
// } // fetchData

// // Вызываем функцию при монтировании компонента
// // В Nuxt 3, вместо onMounted можно использовать useAsyncData
// // или просто вызвать функцию напрямую, если это требуется при инициализации
// getUsers();

</script>

<style scoped>
    h1 { font-size: 3rem; }
</style>