<template>
    <Header />
    <div class="container py-5">
        <slot/><!-- сюда подставляются наши app\pages -->
    </div>
    
    <footer class="bg-dark text-light p-3 mt-5">
        <p class="container">Users Footer</p>
    </footer>
</template>