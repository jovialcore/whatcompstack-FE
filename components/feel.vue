<template>
    <div> This is a feel component for {{  jovial }} </div>

    <button @click="sayAlert('jovialcore')"> Check me out you. I have figured nuxt. and that was fast !</button>
</template>

<script setup>
defineProps(['jovial'])
</script>