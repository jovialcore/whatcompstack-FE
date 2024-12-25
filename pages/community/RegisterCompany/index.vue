<!-- components/MultiStepForm.vue -->
<template>
  <div class="container py-4">
    <!-- Progress bar -->
    <FormPagination :steps="steps" :currentStep="currentStep" />

    <!-- Form steps -->
    <form @submit.prevent="handleSubmit">
      <!-- Step 1: Personal Information -->
      <div v-if="currentStep === 0" class="card">
        <div class="card-body p-4">
          <h2 class="fw-semibold" style="font-size: 1.5rem">Add Company</h2>
          <div class="mb-3 row">
            <div class="col-12 mb-3">
              <FormInputField
                :id="'companyName'"
                :label="'Company Name'"
                :type="'text'"
                :value="formData.name"
              />
            </div>
            <div class="col-12 mb-3">
              <FormInputField
                :id="'about'"
                :label="'About'"
                :type="'text'"
                :value="formData.name"
              />
            </div>
            <div class="col-12 mb-3">
              <FormInputField
                :id="'companyWebsite'"
                :label="'Company Website'"
                :type="'text'"
                :value="formData.name"
              />
            </div>
            <div class="col-12 mb-3">
              <FormInputField
                :id="'slug'"
                :label="'Source Slug'"
                :type="'text'"
                :value="formData.name"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Contact Details -->
      <div v-if="currentStep === 1" class="card">
        <div class="card-body p-4">
          <h2 class="fw-bold" style="font-size: 1.5rem">Contact Details</h2>
          <div class="mb-3">
            <label class="form-label">Phone Number</label>
            <input
              v-model="formData.phone"
              type="tel"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Address</label>
            <textarea
              v-model="formData.address"
              class="form-control"
              rows="3"
              required
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Step 3: Review -->
      <div v-if="currentStep === 2" class="card">
        <div class="card-body">
          <h2 class="card-title mb-4">Review Your Information</h2>
          <div class="mb-3">
            <dl class="row">
              <dt class="col-sm-3">Name</dt>
              <dd class="col-sm-9">{{ formData.name }}</dd>

              <dt class="col-sm-3">Email</dt>
              <dd class="col-sm-9">{{ formData.email }}</dd>

              <dt class="col-sm-3">Phone</dt>
              <dd class="col-sm-9">{{ formData.phone }}</dd>

              <dt class="col-sm-3">Address</dt>
              <dd class="col-sm-9">{{ formData.address }}</dd>
            </dl>
          </div>
        </div>
      </div>

      <!-- Navigation buttons -->
      <div class="mt-4 d-flex justify-content-between">
        <button
          v-if="currentStep > 0"
          type="button"
          @click="prevStep"
          class="btn btn-secondary"
        >
          Previous
        </button>
        <div>
          <button
            v-if="currentStep < steps.length - 1"
            type="button"
            @click="nextStep"
            class="btn btn-dark"
          >
            Next
          </button>
          <button
            v-if="currentStep === steps.length - 1"
            type="submit"
            class="btn btn-success"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const steps = [
  { title: "Personal Info" },
  { title: "Contact" },
  { title: "Review" },
];

const currentStep = ref(0);
const formData = reactive({
  name: "",
  email: "",
  phone: "",
  address: "",
});

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
  // Handle form submission
  console.log("Form submitted:", formData);
  // You can emit an event or call an API here
  emit("submit", formData);
};
</script>
