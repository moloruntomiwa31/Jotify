<template>
    <div class="overlay flex items-center justify-center p-6 " v-if="showModal">
        <div class="modal flex-col space-y-2 flex bg-gray-400 p-8 rounded-md max-w-sm">
            <div>
                <h3 class="font-bold py-2">Title</h3>
                <input type="text" class="p-2 outline-none" v-model.trim="mainTitle" placeholder="Title...">
            </div>
            <div>
                <h3 class="font-bold py-2">Note</h3>
                <textarea name="note" id="note" cols="25" rows="10" v-model.trim="mainNote" @input="handleTextareaInput"
                    class="p-3 resize-none outline-none max-w-screen-sm" placeholder="Note goes here..."></textarea>
            </div>
            <p>{{ remainingCharacters }} / {{ maxTextCount }}</p>
            <button class="bg-red-600 w-1/2 rounded text-white p-2 hover:bg-red-400" @click="handleClick">Add note</button>
            <button class="cross select-none" @click="closeNoteModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15">
                    <path fill="currentColor"
                        d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z" />
                </svg>
            </button>
            <Transition name="fade">
                <p class="text-red-600 italic error">{{ error }}</p>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref , computed} from "vue"
const { showModal, error } = defineProps(["showModal", "error"])
const emit = defineEmits(["handleClick", "submit", "closeNoteModal", "close"])
const mainTitle = ref("")
const mainNote = ref("")
const maxTextCount = ref(100);

const handleClick = () => {
    emit("submit", mainTitle.value, mainNote.value)
    mainTitle.value = ""
    mainNote.value = ""
}
const closeNoteModal = () => {
    emit("close")
}
const remainingCharacters = computed(() => maxTextCount.value - mainNote.value.length);

const handleTextareaInput = (e) => {
  if (e.target.value.length > maxTextCount.value) {
    mainNote.value = e.target.value.slice(0, maxTextCount.value);
  }
};
</script>

<style scoped>
.overlay {
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100%;
    left: 0;
}

.modal {
    position: relative;
    min-width: 20%;
    height: fit-content;
    top: 8%;
}

.cross {
    position: absolute;
    top: 5px;
    right: 20px;
}

.error {
    position: absolute;
    top: 5px;
}

input,
textarea {
    max-width: 85%;
}

/* animating error */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease-in-out;
}
p {
    color: red;
    font-family: Syne;
}
</style>