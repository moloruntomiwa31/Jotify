<template>
    <div class="preloader">
        <div class="spinner"></div>
    </div>
</template>

<script setup>
    
</script>

<style scoped>
.preloader {
    display: grid;
    place-items: center;
    height: 100vh;
}

.spinner {
    border: 4px dotted rgba(255, 110, 110);
    border-top: 6px dotted #ff4040;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>