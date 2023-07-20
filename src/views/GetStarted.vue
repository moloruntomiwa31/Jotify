<template>
    <main class="container mx-auto p-8 items-center mt-24">
        <Modal :showModal="showModal" :error="error" @submit="addNote"/>
        <div class="flex justify-between space-x-4 items-center md:justify-around details">
            <h2 class="font-bold text-xl md:text-4xl w-1/2">
                Welcome, <input type="text" placeholder="Name..." class="text-red-500 bg-none" v-model="name">
            </h2>
            <button @click="showModal = true" class="text-md md:text-xl select-none bg-gray-300 px-2 py-4 rounded-xl hover:border-red-600 hover:border-2 hover:bg-gray-200 duration-200 ease-linear">Add Notes</button>
        </div>
        <Card :notes="notes" @deleteNote="deleteNote"/>
    </main>
</template>

<script setup>
    import Card from "../components/Card.vue"
    import Modal from "../components/Modal.vue"
    import { ref, watch, onMounted } from 'vue';
    const showModal = ref(false)
    const notes = ref([])
    const error = ref("")
    const name = ref("")

    watch(name, (newval) => {
        localStorage.setItem("name", newval)
    })
    onMounted(() => {
        name.value = localStorage.getItem("name") || ""
        notes.value = JSON.parse(localStorage.getItem("notes")) || []
    })
    watch(notes, (newItem) => {
        localStorage.setItem("notes", JSON.stringify(newItem))
    }, {deep: true})

    const addColor = () => {
        return "hsl(" + Math.random() * 360 + ", 100%, 75%)"
    }

    const addNote = (title, note) => {
        if (note.length < 10)  {
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
</style>