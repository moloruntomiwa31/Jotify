<template>
     <div class="card-container container p-4 my-6 flex justify-center">
            <div class="card flex flex-col space-y-2 text-black" v-for="(note, index) in notes" :key="note.id" :style="{backgroundColor : note.backgroundColor}">
                <h4 class="font-bold text-lg">{{ note.title }}</h4>
                <p class="text-gray-800">
                    {{ note.note }}
                </p>
                <div class="flex items-center justify-between">
                    <p>{{ note.date }}</p>
                    <p>{{ note.time }}</p>
                    <button @click="deleteNote(index)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M227.313 363.313L312 278.627l84.687 84.686l22.626-22.626L334.627 256l84.686-84.687l-22.626-22.626L312 233.373l-84.687-84.686l-22.626 22.626L289.373 256l-84.686 84.687l22.626 22.626z"/><path fill="currentColor" d="M472 64H194.644a24.091 24.091 0 0 0-17.42 7.492L16 241.623v28.754l161.224 170.131a24.091 24.091 0 0 0 17.42 7.492H472a24.028 24.028 0 0 0 24-24V88a24.028 24.028 0 0 0-24-24Zm-8 352H198.084L48 257.623v-3.246L198.084 96H464Z"/></svg>
                    </button>
                </div>
            </div>   
        </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue" 
const emit = defineEmits(["deleteNote"])
const {notes} = defineProps(["notes"])

const deleteNote = (index) => {
    emit("deleteNote", index)
}

</script>

<style scoped>
        .card-container {
        flex-wrap: wrap;
        height: 100%;
        gap: 1rem;
        overflow: hidden;
        font-family: Syne;
    }
    .card {
        min-width: 80%;
        min-height: 50%;
        max-width: auto;
        max-height: auto;
        padding: 1rem;
        border-radius: 0.9rem;
    }
</style>