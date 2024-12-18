<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <p class="mb-0 text-secondary">{{ label }}</p>
    <p class="mb-0 text-dark text-truncate">{{ value }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  value: {
    type: String,
  },
});
</script>
