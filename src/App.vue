<script setup>
import { RouterView } from "vue-router"
import NavBar from "./components/NavBar.vue"
</script>

<template>
    <NavBar />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style scoped>
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease-out;
    }
</style>
