<template>
    <div>
        <h1>Вело анекдоты</h1>


        <p class="plain24px"/>
        <div class="text-center">
            <img src="/src/img/smiles/smile.gif" class="mr-4px" width="18" height="18" alt=""/>
            <img src="/src/img/smiles/smile.gif" class="mr-4px" height="18" alt=""/>
            <img src="/src/img/smiles/smile.gif" width="18" height="18" alt=""/>
        </div>
            
        <p class="plain6px"/>
        Мужчина едет на <b class="plain">велосипеде</b>. На мосту рыболов стоит. Велосипедист
        остановился и спрашивает:  <br>
        - Ну что, рыбку ловим?  <br>
        Молчание.  <br>
        - Я говорю, рыбку ловим?  <br>
        Рыбак молчит.  <br>
        - Ты что глухой? Я спрашиваю, рыбку ловим?  <br>
        Молчание. Мужик плюнул, сел на <b class="plain">велосипед</b> и поехал. Дорога шла в гору. С
        большим трудом велосипедист взобрался на гору. Вдруг слышит, что рыбак
        ему что-то кричит. Развернулся и покатил обратно. Подъезжает к рыбаку, а
        тот спрашивает:  <br>
        - Ну что, на <b class="plain">велосипеде</b> катаемся?


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