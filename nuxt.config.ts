// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        'usebootstrap',
        '@pinia/nuxt',
    ],
    components: [
        {
        path: '~/components',
        pathPrefix: false,
        },
    ],
    // pinia: {
    //     autoImports: 'defineStore'
    //     // storesDirs: ['./stores/**', './custom-folder/stores/**'],
    // },
    app: {
        head: {
            htmlAttrs: { lang: 'ru', },
            title: 'Nuxt MassaProger Course',
            meta: [
                { 'charset': 'utf-8' },
                // { 'name': 'description', 'content': 'default description' },
                // { 'name': 'keywords', 'content': 'default keywords' },
                { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0' },
            ],
            // link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, ]
            // script: [{ src: 'https://somelib.js' },],
            // link: [{ rel: 'stylesheet', href: 'https://somestyles.css' },],
        },
        rootAttrs: {
            class: "wrap",
        },
    },
    // plugins: [
    //     '~/plugins/mongodb.js'
    // ],
    // // Добавьте переменные окружения, чтобы Nuxt их читал
    // // Если у вас Nuxt 2.13+, это не обязательно
    // buildModules: [
    //     '@nuxtjs/dotenv'
    // ]
    // runtimeConfig: {
    //     MONGODB_URI: process.env.MONGODB_URI
    // }
})