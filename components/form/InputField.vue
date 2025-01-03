<template>
  <label
    class="form-label fw-semibold text-secondary text-uppercase mb-1"
    :for="id"
    >{{ label }}</label
  >

  <input
    v-if="inputTypes.includes(inputType)"
    :type="type"
    class="form-control py-2 text-dark"
    style="border-radius: 10px; font-size: 1rem"
    :id="id"
    :value="value"
    :placeholder="placeholder"
    @input="handleInput"
  />

  <textarea
    v-if="inputType === 'textarea'"
    class="form-control py-2 text-dark"
    style="border-radius: 10px; font-size: 1rem"
    :id="id"
    :value="value"
    :placeholder="placeholder"
    :type="type"
    @input="handleInput"
    rows="3"
  ></textarea>

  <FormMultiSelect
    v-if="inputType === 'multiselect'"
    :suggestions="suggestions"
    :modelValue="value"
    :placeholder="placeholder"
    @input="(value) => handleSelection(value)"
  />

  <p v-if="error" class="text-danger">{{ error }}</p>
</template>
<script setup>
const inputTypes = ["text", "email", "password", "number", "tel", "file"];
const props = defineProps({
  inputType: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number, Array],
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
      ["text", "email", "password", "number", "tel", "file"].includes(value),
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
  suggestions: {
    type: Array,
    default: () => [],
  },
  selections: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["input"]);

// const inputValue = ref(props.value);
const handleInput = (event) => {
  emit("input", event.target.value);
};

const handleSelection = (value) => {
  emit("input", value);
};
</script>
