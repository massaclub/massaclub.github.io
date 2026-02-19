import { defineStore } from 'pinia'
// import { defineStore } from "~~/node_modules/pinia/dist/pinia"

export const useCounterStore = defineStore('counter', {
state: () => ({
    count: 1,
    name: 'Jenifer Lopez',
}),
getters: {
    doubleCount: (state) => state.count * 2,
},
actions: {
    increment() {
        this.count++
    },
},
})