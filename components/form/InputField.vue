<template>
  <label
    class="form-label fw-semibold text-secondary text-uppercase mb-1"
    :for="id"
    >{{ label }}</label
  >
  <input
    :type="type"
    class="form-control py-2 text-dark"
    style="border-radius: 10px; font-size: 0.8rem"
    :id="id"
    :value="inputValue"
  />
</template>
<script setup>
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
    validator: (value) =>
      ["text", "email", "password", "number", "tel"].includes(value),
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});

const inputValue = ref(props.value);
</script>
