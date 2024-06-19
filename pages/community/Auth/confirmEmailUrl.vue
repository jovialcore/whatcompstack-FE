<template>

<p> hi </p>
</template>


<script setup>
import { useAuthStore } from '~/store/useAuthStore';

const route = useRoute();

const auth = useAuthStore()

await auth.verifyEmailUrl();
</script>