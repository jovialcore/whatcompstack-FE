<template>
  <div class="bg-white py-4 px-5 rounded-3 mb-3">
    <div
      class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3"
    >
      <p class="fw-bold text-dark mb-0 fs-5">{{ sectionTitle }}</p>

      <component
        :is="editSectionModalComponent"
        v-bind="editSectionModalProps"
      ></component>
    </div>

    <div class="d-flex flex-column gap-3">
      <div class="row g-3">
        <ProfileSingleInfoItem
          v-for="item in data"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sectionTitle: {
    type: String,
    default: "",
  },
  editSectionModalComponent: {
    type: Object,
  },
  data: {
    type: Array,
    default: [],
    required: true,
  },
  editSectionModalProps: {
    type: Object,
  },
});
</script>
