<template>
    <main class="container mx-auto p-8 items-center mt-24">
        <Modal :showModal="showModal" :error="error" @submit="addNote"/>
        <div class="flex justify-between space-x-4 items-center md:justify-around">
            <h2 class="font-bold text-2xl md:text-4xl">Welcome, <span class="text-red-500">Mate!</span></h2>
            <button @click="showModal = true" class="select-none bg-gray-300 px-2 py-4 rounded-xl hover:border-red-600 hover:border-2 hover:bg-gray-200 duration-200 ease-linear">Add Notes</button>
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
    // const loadItems = () => {
    //     if (localStorage.getItem("notes") !== null) {
    //         notes.value =  JSON.parse(localStorage.getItem("notes")) 
    //     }
    // }  
    // onMounted(loadItems())
    // watch(notes, (newItem) => {
    //     localStorage.setItem("notes", JSON.stringify(newItem))
    //     {deep: true}
    // })
    // watch(notes, localStorage.setItem('myArray', JSON.stringify(notes)), { deep: true });
    // if (localStorage.getItem("myArray")) {
    //     notes.value = JSON.parse(localStorage.getItem('myArray'));
    // }
</script>

<style scoped>
     * {
        font-family: Poppins;
    }
</style>