<template>
    <header class="bg-dark p-3">
        <div class="mw-960 w100prc mx-auto">
            <ul class="nav container">
                <li class="nav-item"><NuxtLink to="/" class="nav-link text-white">Главная</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="/contacts" class="nav-link text-white">Контакты</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="/users" class="nav-link text-white">Пользователи</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="/home" class="nav-link text-white">Home</NuxtLink></li>
                <li class="nav-item"><NuxtLink to="/wallpapers" class="nav-link text-white">Обои</NuxtLink></li>
            </ul>
        </div>
    </header>
</template>

<style>
    header a:not(.router-link-exact-active):hover {
        text-decoration: underline;
    } 

    header a.router-link-exact-active {
        color: #ffb636 !important;
        font-weight: 500;
    }
</style>