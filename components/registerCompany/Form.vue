<template>
  <div class="card">
    <div class="card-body p-4">
      <h2 class="fw-semibold" style="font-size: 1.5rem">Add Company</h2>
      <div class="mb-3 row">
        <div class="col-12 mb-3">
          <FormInputField
            :id="'companyName'"
            :label="'Company Name'"
            :type="'text'"
            :value="modelValue.name"
            :placeholder="'John Doe Inc.'"
            @input="(value) => $emit('update', 'name', value)"
          />
        </div>
        <div class="col-12 mb-3">
          <FormInputField
            :id="'about'"
            :label="'About'"
            :inputType="'textarea'"
            :value="modelValue.about"
            @input="(value) => $emit('update', 'about', value)"
          />
        </div>
        <div class="col-12 mb-3">
          <FormInputField
            :id="'websiteUrl'"
            :label="'Company Website'"
            :type="'text'"
            :value="modelValue.websiteUrl"
            :placeholder="'https://www.johndoe.inc'"
            @input="(value) => $emit('update', 'websiteUrl', value)"
          />
        </div>
        <div class="col-12 mb-3">
          <FormInputField
            :id="'slug'"
            :label="'Source Slug'"
            :type="'text'"
            :value="modelValue.slug"
            :placeholder="'johndoeinc'"
            @input="(value) => $emit('update', 'slug', value)"
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
