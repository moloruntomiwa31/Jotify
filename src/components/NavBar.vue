<template>
    <nav class="bg-gray-100 fixed top-0 left-0 container mx-auto px-6 py-4 items-center flex justify-between md:px-16">
        <div class="flex items-center">
            <img src="../../public/jotify.svg" alt="">
            <h1 class="text-black font-bold text-2xl">Jot<span class="text-red-400">ify</span></h1>
        </div>
        <div class="md:flex items-center justify-between space-x-2 md:space-x-4 hidden">
            <RouterLink to="/" active-class="active" class="hover:text-red-500 duration-100 ease-linear">Home</RouterLink>
            <RouterLink to="/getstarted/note" active-class="active" class="hover:text-red-500 duration-100 ease-linear">Get
                Started</RouterLink>
            <RouterLink to="/tasks" active-class="active" class="hover:text-red-500 duration-100 ease-linear">Tasks
            </RouterLink>
        </div>
        <button class="block md:hidden rotate-180" @click="showOverlay = true">
            <svg id="open" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="m5 13l4 4l-1.4 1.42L1.18 12L7.6 5.58L9 7l-4 4h16v2H5m16-7v2H11V6h10m0 10v2H11v-2h10Z" />
            </svg>
        </button>
    </nav>

    <div class="overlay md:hidden" v-if="showOverlay">
        <div class="flex flex-col links space-y-6 text-center">
            <RouterLink to="/" class="hover:text-red-400 transition-all duration-300 ease-linear">Home</RouterLink>
            <RouterLink to="/getstarted/note"
                class="hover:text-red-400 border-2 p-2 rounded-xl hover:border-red-400 transition-all duration-300 ease-linear">
                Get Started</RouterLink>
            <RouterLink to="/tasks" class="hover:text-red-400 transition-all duration-300 ease-linear">Tasks</RouterLink>
        </div>
        <button id="close" @click="showOverlay = false" v-if="showOverlay = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15">
                <path fill="white"
                    d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router"
import { ref } from "vue"
import { useRouter } from "vue-router";

const showOverlay = ref(false)

// close link page after each link click
const router = useRouter()

router.afterEach(() => {
    if (showOverlay.value) {
        showOverlay.value = false
    }
})
</script>
   
<style scoped>
* {
    font-family: Poppins;
}

nav {
    min-width: 100%;
    z-index: 99;
}

#close {
    transition: all 0.9s ease-in-out;
    z-index: 99;
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: gray;
    padding: 0.2rem;
    border-radius: 50%;
}

.active {
    background-color: rgb(212, 90, 90);
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem;
    align-self: center;
    color: white;
}

.overlay {
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100%;
    left: 0;
    z-index: 99;
    transition: all 0.4s ease-in-out;
}

.links {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}</style>