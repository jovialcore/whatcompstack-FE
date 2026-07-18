<template>
  <div class="mb-4">
    <div class="d-flex justify-content-between align-items-center">
      <template v-for="(step, index) in steps" :key="index">
        <div class="d-flex align-items-center">
          <div
            :class="[
              'rounded-circle d-flex align-items-center justify-content-center',
              'border border-2',
              'text-center',
              currentStep > index
                ? 'bg-dark text-white'
                : currentStep === index
                ? 'bg-secondary text-white'
                : 'bg-light',
              'position-relative',
            ]"
            style="width: 40px; height: 40px"
          >
            {{ index + 1 }}
          </div>
          <span class="ms-2 text-uppercase">{{ step.title }}</span>
        </div>
        <div
          v-if="index < steps.length - 1"
          :class="['flex-grow-1 mx-4 my-auto', 'progress', 'position-relative']"
          style="height: 2px"
        >
          <div
            :class="[
              'progress-bar',
              currentStep > index ? 'bg-dark' : 'bg-secondary',
            ]"
            :style="{ width: currentStep > index ? '100%' : '0%' }"
          ></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  steps: Array,
  currentStep: Number,
});
</script>
