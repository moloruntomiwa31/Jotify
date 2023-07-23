<template>
       <div class="tasks space-y-4 rounded-lg" v-if="tasks.length > 0">
            <div v-for="task in tasks">
                <div class="flex justify-between md:justify-around bg-gray-100 p-3 shadow-md rounded-xl">
                    <button class="bg-white p-1 rounded-md shadow-md" @click="task.done = !task.done" :class="{done : task.done}">&check;</button>
                    <label for=""  :class="{done : task.done}">{{ task.task }}</label>
                    <button @click="handleButton(index)" class="shadow-md bg-white p-1 rounded-md ">&cross;</button>
                </div>
            </div>  
        </div>
</template>

<script setup>
    import {defineProps, defineEmits} from "vue"
    const {tasks} = defineProps(["tasks"])
    const emit = defineEmits(["handleButton", "deleteTask"])
    const handleButton = (index) => {
        emit("deleteTask", index)
    }
</script>

<style scoped>
    .tasks {
    padding: 10px;
    margin: 2rem auto;
    width: 80%;
    color: rgb(37, 37, 37);
}

p,
.tasks {
    font-family: Syne;
}
.done {
    color: white;
    background-color: green;
    padding: 4px;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
}
</style>