<template>
        <Preloader v-if="isLoading"/>
    <main class="container mx-auto p-8 items-center mt-24" :class="{back : removeClass}" v-else>
        <div class="flex justify-end user">
            <button class="cursor-normal border-2 border-red-500 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#f45044" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="8" r="5" fill="#f45044"/><path d="M20 21a8 8 0 1 0-16 0"/><path fill="#f45044" d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z"/></g></svg>
                <p class="number">{{ notes.length }}</p>
            </button>
        </div>
        <Modal :showModal="showModal" :error="error" @submit="addNote" @close="closeNoteModal"/>
        <h2 class="justify-center text-3xl pb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" stroke="#f44245" stroke-width="1.5">
                    <path
                        d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73c.1-.012.198-.03.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z" />
                    <path
                        d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592c.426-.114.813-.218 1.165-.309"
                        opacity=".5" />
                    <path stroke-linecap="round" d="m11.777 10l4.83 1.294" />
                    <path stroke-linecap="round" d="m11 12.898l2.898.776" opacity=".5" />
                </g>
            </svg>
            Jot<span class="text-red-400">ify</span> Notes
        </h2>
        <div class="flex justify-between space-x-4 items-center md:justify-around details">
            <h3 class="font-bold text-xl md:text-2xl w-1/2">
                Welcome, <input type="text" placeholder="Name..." class="text-red-500 bg-none" v-model="name">
            </h3>
            <button @click="showModal = true"
                class="text-md md:text-xl select-none bg-gray-300 px-2 py-4 rounded-xl hover:border-red-600 hover:border-2 hover:bg-gray-200 duration-200 ease-linear">Add
                Notes</button>
        </div>
        <Card :notes="notes" @deleteNote="deleteNote" />
    </main>
</template>

<script setup>
import Preloader from "../components/Preloader.vue"
import Card from "../components/Card.vue"
import Modal from "../components/Modal.vue"
import { ref, watch, onMounted, onUnmounted } from 'vue';
const showModal = ref(false)
const notes = ref([])
const error = ref("")
const name = ref("")
const isLoading = ref(true)


watch(name, (newval) => {
    localStorage.setItem("name", newval)
})
onMounted(() => {
    name.value = localStorage.getItem("name") || ""
    notes.value = JSON.parse(localStorage.getItem("notes")) || []
})
watch(notes, (newItem) => {
    localStorage.setItem("notes", JSON.stringify(newItem))
}, { deep: true })

const addColor = () => {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)"
}

const addNote = (title, note) => {
    if (note.length < 10) {
        error.value = "Add more words to note."
        return
    }
    notes.value.push({
        id: Math.random() * 5000,
        title: title,
        note: note,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        backgroundColor: addColor()
    })
    showModal.value = false
    error.value = ""
}
const deleteNote = (index) => {
    notes.value.splice(index, 1)
}
const closeNoteModal = () => {
    showModal.value = false
}
const removeClass = ref(false)
const handleResize = () => {
    removeClass.value = window.innerWidth <= 660;
};

onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    setTimeout(() => {
    isLoading.value = false;
  }, 1000); 
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
* {
    font-family: Poppins;
}

input[type="text"] {
    display: inline-block;
    outline: none;
}

input[type="text"]::placeholder {
    color: rgb(249, 107, 107);
}

.details {
    max-width: 100%;
}
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
.back {
    aspect-ratio: 540/960;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("../../public/polygon-scatter-haikei (1).svg");
}
</style>