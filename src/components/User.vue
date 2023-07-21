<template>
      <div class="flex justify-end user">
            <button class="cursor-normal border-2 border-red-600 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#f45044" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="8" r="5" fill="#f45044"/><path d="M20 21a8 8 0 1 0-16 0"/><path fill="#f45044" d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z"/></g></svg>
                <p class="number">{{ tasks.length }}</p>
            </button>
        </div>
</template>

<script setup>
    import {defineProps} from "vue"
    const {tasks} = defineProps(["tasks"])
</script>

<style scoped>
    .user {
        position: relative;
    }
.user .number {
    background-color: rgb(209, 207, 207);
    padding: 0.3rem;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: 0;
    font-family: Syne;
}
</style>