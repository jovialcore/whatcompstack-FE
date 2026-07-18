<template>
  <div class="container py-4 flex-grow-1">
    <FormPagination :steps="steps" :currentStep="currentStep" />

    <form @submit.prevent="handleSubmit">
      <RegisterCompanyForm
        v-model="formData"
        @update="updateFormData"
        v-if="currentStep === 0"
      />

      <RegisterCompanyAddStackForm
        v-model="formData"
        @update="updateFormData"
        v-if="currentStep === 1"
      />

      <!-- Navigation buttons -->
      <div class="mt-4 d-flex flex-row-reverse justify-content-between">
        <div>
          <button
            v-if="currentStep < steps.length - 1"
            type="button"
            @click="nextStep"
            class="btn btn-dark fw-semibold"
          >
            Next
          </button>
          <button
            v-if="currentStep === steps.length - 1"
            type="submit"
            class="btn btn-dark fw-semibold"
          >
            Submit
          </button>
        </div>

        <button
          v-if="currentStep > 0"
          type="button"
          @click="prevStep"
          class="btn btn-secondary fw-semibold"
        >
          Previous
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const steps = [{ title: "Add Company" }, { title: "Add Stack" }];

const currentStep = ref(0);
const formData = ref({
  name: "",
  about: "",
  websiteUrl: "",
  slug: "",
  ceoName: "",
  ceoContact: "",
  ctoName: "",
  ctoContact: "",
  hrName: "",
  hrContact: "",
  logo: "",
  frontendStack: ["JavaScript"],
  backendStack: [],
  mobileStack: [],
});

const updateFormData = (field, value) => {
  formData.value[field] = value;
};

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const handleSubmit = () => {
  // console.log("Form submitted:", formData);
  // emit("submit", formData);
};
</script>
