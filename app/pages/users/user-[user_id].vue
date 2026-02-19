<template>
    <div>
        <NuxtLink to="/users">Все пользователи</NuxtLink><hr>
        <h1>{{ data.firstName }} {{ data.lastName }}</h1>
        <p>User <b>ID: {{ data.id }}</b></p>
        <p><img :src="data.image" class="border"></p>
        <p>
        <b>State:</b> {{ data.address.state }}<br>
        <b>City:</b> {{ data.address.city }}<br>
        <b>Address:</b> {{ data.address.address }}</p>
    </div>
</template>

<script setup lang="ts">
const { user_id } = useRoute().params
// для использования такой записи не забываем указывать
// в <script> слово setup
definePageMeta({
    layout: 'users'
})

// Используем useFetch
const { data } = await useFetch('https://dummyjson.com/users/' + user_id)
console.log('data: ', data);

// // Используем axios (альтернатива useFetch) - простой пример
// import axios from 'axios' // Импортируем axios
// const response = await axios.get('https://dummyjson.com/users/' + user_id)
// const data = ref(response.data)
// console.log('response: ', response);

</script>

<style scoped>
    h1 { font-size: 3rem; }
</style>