<template>
    <Preloader v-if="isLoading"/>
    <main class="container mx-auto p-8 items-center mt-24 medium-back" v-else>
        <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
            <div class="max-w-md flex justify-center md:w-1/2 ">
                <img src="../assets/img/22874413_6686852.jpg" alt="" class="rounded-full">
            </div>
            <div class="py-6 text-center space-y-6 md:text-left md:w-1/2 lg:w-1/3">
                <h1 class="text-black font-bold text-5xl">Jot<span class="text-red-500">ify</span></h1>
                <p class="text-lg leading-8">
                    Jotify is a note-taking app that lets you easily create notes and reminders to help you keep track of your thoughts. 
                    It also has a task list feature where you can add todos.
                    It helps you to quickly capture your thoughts. It's a great choice for students, clean design and easy to use.
                    Jotify is free, with no premium version.
                </p>
                <button @click="router.push('/getstarted/note')"
                style="background: rgb(191,59,12);
background: linear-gradient(45deg, #f45044 30%, rgb(255, 99, 87) 91%);"
                class="text-white p-3 shadow-md rounded-full transition-all duration-500 ease-in-out ">
                    Get Started
                </button>
            </div>
        </div>
    </main>
</template>

<script setup>
import Preloader from "../components/Preloader.vue"
import { useRouter } from 'vue-router';
import {ref, onMounted} from "vue"
const router = useRouter()
const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000); 
});
</script>

<style scoped>
    * {
        font-family: Poppins;
    }
    .medium-back{
        aspect-ratio: 960/540;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url("../../public/circle-scatter-haikei.svg");
    }
</style>