<template>
    <Header />
    <div class="container py-5">
        <slot/><!-- сюда подставляются наши app\pages -->
    </div>
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