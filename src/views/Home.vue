<template>
    <main class="container mx-auto p-8 items-center mt-24">
        <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
            <div class="max-w-md flex justify-center md:w-1/2 ">
                <img src="../assets/img/22874413_6686852.jpg" alt="">
            </div>
            <div class="py-6 text-center space-y-6 md:text-left md:w-1/2 lg:w-1/3">
                <h1 class="text-black font-bold text-5xl">Jot<span class="text-red-400">ify</span></h1>
                <p class="text-xl leading-8">
                    Jotify is a note-taking app that lets you easily create notes and reminders to help you keep track of your thoughts. 
                    It helps you to quickly capture your thoughts. It's a great choice for students, clean design and easy to use.
                    Jotify is free, with no premium version.
                </p>
                <button @click="router.push('/getstarted/note')"
                style="background: rgb(191,59,12);
background: linear-gradient(45deg, #f45044 30%, rgb(255, 99, 87) 91%);"
                class="text-white p-3 rounded-full transition-all duration-500 ease-in-out hover:bg-transparent hover:border-2 hover:border-red-500">
                    Get Started
                </button>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style scoped>
    * {
        font-family: Poppins;
    }
</style>