<template>
  <div class="card">
    <div class="card-body p-4">
      <h2
        class="fw-semibold text-dark d-flex align-items-center"
        style="font-size: 1.25rem"
      >
        <span class="me-2">💼</span>Add Company
      </h2>
      <div class="mb-3 row">
        <div
          class="col-12 fw-bold mt-1 mb-3 border-bottom pb-1 border-light text-dark"
        >
          COMPANY INFO<span class="ms-2">ℹ️</span>
        </div>
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
            :placeholder="'Job source slug'"
            @input="(value) => $emit('update', 'slug', value)"
          />
        </div>
        <div class="col-12 mb-3">
          <FormInputField
            :id="'logo'"
            :label="'Company Logo'"
            :type="'file'"
            :inputType="'file'"
            :value="modelValue.logo"
            :placeholder="'+1 (123) 456-7890'"
            @input="(value) => $emit('update', 'logo', value)"
          />
        </div>

        <div
          class="col-12 fw-bold mt-3 mb-3 border-bottom pb-1 border-light text-dark"
        >
          CONTACTS<span class="ms-2">☎️</span>
        </div>
        <div class="col-12 col-md-6 mb-3">
          <FormInputField
            :id="'ceoName'"
            :label="'CEO Name'"
            :type="'text'"
            :value="modelValue.ceoName"
            :placeholder="'John Doe Inc.'"
            @input="(value) => $emit('update', 'ceoName', value)"
          />
        </div>
        <div class="col-12 col-md-6 mb-3">
          <FormInputField
            :id="'ceoContact'"
            :label="'CEO Contact'"
            :inputType="'text'"
            :value="modelValue.ceoContact"
            :placeholder="'+1 (123) 456-7890'"
            @input="(value) => $emit('update', 'ceoContact', value)"
          />
        </div>
        <div class="col-12 col-md-6 mb-3">
          <FormInputField
            :id="'ctoName'"
            :label="'CTO Name'"
            :type="'text'"
            :value="modelValue.ctoName"
            :placeholder="'Jane Racket'"
            @input="(value) => $emit('update', 'ctoName', value)"
          />
        </div>
        <div class="col-12 col-md-6 mb-3">
          <FormInputField
            :id="'ctoContact'"
            :label="'CTO Contact'"
            :type="'text'"
            :value="modelValue.ctoContact"
            :placeholder="'+1 (123) 456-7890'"
            @input="(value) => $emit('update', 'ctoContact', value)"
          />
        </div>

        <div class="col-12 col-md-6 mb-3">
          <FormInputField
            :id="'hrName'"
            :label="'HR Name'"
            :inputType="'text'"
            :value="modelValue.hrName"
            :placeholder="'Rodri Lei'"
            @input="(value) => $emit('update', 'hrName', value)"
          />
        </div>
        <div class="col-12 col-md-6 mb-3">
          <FormInputField
            :id="'hrContact'"
            :label="'HR Contact'"
            :type="'text'"
            :value="modelValue.hrContact"
            :placeholder="'+1 (123) 456-7890'"
            @input="(value) => $emit('update', 'hrContact', value)"
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
