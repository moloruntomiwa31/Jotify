<template>
    <Preloader v-if="isLoading"/>
    <main class="container mx-auto p-8 items-center mt-24" :class="{ back: removeClass }" v-else>
        <User :tasks="tasks" />
        <header>
            <h2 class="justify-center text-3xl pb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
                    <path fill="#f44245"
                        d="M29.29 34H6.71A1.7 1.7 0 0 1 5 32.31V6.69A1.75 1.75 0 0 1 7 5h2v2H7v25h22V7h-2V5h2.25A1.7 1.7 0 0 1 31 6.69v25.62A1.7 1.7 0 0 1 29.29 34Z"
                        class="clr-i-outline clr-i-outline-path-1" />
                    <path fill="#f44245"
                        d="M16.66 25.76L11.3 20.4a1 1 0 0 1 1.42-1.4l3.94 3.94l8.64-8.64a1 1 0 0 1 1.41 1.41Z"
                        class="clr-i-outline clr-i-outline-path-2" />
                    <path fill="#f44245"
                        d="M26 11H10V7.33A2.34 2.34 0 0 1 12.33 5h1.79a4 4 0 0 1 7.75 0h1.79A2.34 2.34 0 0 1 26 7.33ZM12 9h12V7.33a.33.33 0 0 0-.33-.33H20V6a2 2 0 0 0-4 0v1h-3.67a.33.33 0 0 0-.33.33Z"
                        class="clr-i-outline clr-i-outline-path-3" />
                    <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                Jot<span class="text-red-400">ify</span> Tasks
            </h2>
        </header>
        <form class="flex flex-col justify-center items-center space-y-4" @submit.prevent="addNote">
            <div class="flex space-x-4 category">
                <div class="flex flex-col items-center">
                    <label for="others" class="text-red-500 text-lg">Others</label>
                    <input type="radio" name="usage" id="others" value="others" class=" h-4 w-4">
                </div>
                <div class="flex flex-col items-center">
                    <label for="personal" class="text-blue-700 text-lg">Personal</label>
                    <input type="radio" name="usage" id="personal" value="personal" class=" h-4 w-4">
                </div>
            </div>
            <div class="task-bar flex justify-center">
                <input type="text" v-model.trim="task" class="p-3 bg-gray-200 rounded-lg outline-none text-red-500"
                    placeholder="Task here.." @keyup.enter="addTask">
                <button @click="addTask" class="md:hidden sm-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#f45044"
                            d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
                    </svg>
                </button>
                <button @click="addTask" class="hidden md:block px-4 mx-4 bg-gray-300 py-2 rounded-md hover:text-red-400">
                    Add Task
                </button>
            </div>
            <Transition name="fade">
                <p class="text-red-600 italic" v-if="error">Please add task</p>
            </Transition>
            <p class="text-gray-800">e.g Watch Looney Tunes, Trade Stock</p>
        </form>
        <TaskDetails :tasks="tasks" @deleteTask="deleteTask"/>
    </main>
</template>

<script setup>
import Preloader from "../components/Preloader.vue"
import TaskDetails from "../components/TaskDetails.vue"
import { ref, onMounted, watch, onUnmounted } from "vue"
import User from "../components/User.vue"
const tasks = ref([])
const task = ref("")
const error = ref(false)
const isLoading = ref(true)

const addTask = () => {
    if (!task.value.length > 0) {
        error.value = true
        return
    }
    error.value = false
    tasks.value.push({
        task: task.value,
        done: false
    })
    task.value = ""
}
const deleteTask = (index) => {
    tasks.value.splice(index, 1)
}
watch(tasks, (newItem) => {
    localStorage.setItem("tasks", JSON.stringify(newItem))
}, { deep: true })
onMounted(() => {
    tasks.value = JSON.parse(localStorage.getItem("tasks")) || []
})
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

h2,
form {
    font-family: Poppins;
}

.task-bar {
    min-width: 100%;
    position: relative;
}

.task-bar input[type="text"] {
    width: 80%;
}

.task-bar .sm-btn {
    position: absolute;
    top: 13px;
    right: 60px;
}

input[type="checkbox"]:checked+label {
    text-decoration: line-through;
    color: rgb(104, 98, 97);
}

/* animations */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.7s ease-in;
}

.back {
    aspect-ratio: 540/960;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("../../public/blob-haikei.svg");
}
</style>
