<template>
    <header class="bg-dark p-15">
        <div class="mw-960 w100prc text-secondary px-15 mx-auto">
            <div class="px-15">
                <b>Масса header</b>
            </div>
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