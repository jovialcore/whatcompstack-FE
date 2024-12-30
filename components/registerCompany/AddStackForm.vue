<template>
  <div class="card">
    <div class="card-body p-4">
      <h2 class="fw-semibold" style="font-size: 1.5rem">Add Stack</h2>
      <div class="mb-3 row">
        <div class="col-12 mb-3">
          <FormInputField
            :id="'feStack'"
            :label="'Frontend Stack'"
            :inputType="'multiselect'"
            :suggestions="['JavaScript', 'Python', 'Java', 'React', 'Next JS']"
            :value="modelValue.frontendStack"
            @input="(value) => $emit('update', 'frontendStack', value)"
          />
        </div>
        <div class="col-12 mb-3">
          <FormInputField
            :id="'beStack'"
            :label="'Backend Stack'"
            :inputType="'multiselect'"
            :suggestions="[
              'JavaScript',
              'Python',
              'Java',
              'React',
              'Next JS',
              'Node JS',
              '.Net',
              'Express JS',
              'Nest JS',
              'Django',
              'Fast API',
              'Flask',
              'Spring boot',
              'Ruby',
              'Go lang',
            ]"
            :value="modelValue.backendStack"
            @input="(value) => $emit('update', 'backendStack', value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["update"]);
</script>
