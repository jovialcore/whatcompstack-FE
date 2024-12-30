<template>
  <div class="position-relative">
    <div
      class="form-control d-flex flex-wrap gap-2 min-h-auto"
      @click="focusInput"
    >
      <span
        v-for="item in selectedItems"
        :key="item"
        class="badge bg-primary d-flex align-items-center gap-2"
      >
        {{ item }}
        <button
          type="button"
          class="btn-close btn-close-white"
          style="font-size: 0.5rem"
          @click.stop="removeItem(item)"
          aria-label="Remove"
        ></button>
      </span>

      <input
        ref="inputRef"
        type="text"
        class="border-0 flex-grow-1 min-w-50"
        style="outline: none; background: transparent"
        v-model="searchQuery"
        @input="handleInput"
        @keydown.enter.prevent="handleEnter"
        @keydown.down.prevent="handleArrowDown"
        @keydown.up.prevent="handleArrowUp"
        @keydown.backspace="handleBackspace"
        @blur="handleBlur"
        :placeholder="selectedItems.length ? '' : placeholder"
      />
    </div>

    <div
      v-if="showSuggestions && (filteredSuggestions.length > 0 || searchQuery)"
      class="position-absolute w-100 mt-1 shadow bg-white border rounded-2"
      style="z-index: 3"
    >
      <template v-if="filteredSuggestions.length > 0">
        <button
          v-for="(suggestion, index) in filteredSuggestions"
          :key="suggestion"
          class="dropdown-item w-100 text-start"
          :class="{ active: index === selectedIndex }"
          @mousedown.prevent="selectSuggestion(suggestion)"
          @mouseover="selectedIndex = index"
        >
          {{ suggestion }}
        </button>
      </template>

      <button
        v-if="searchQuery && !exactMatch"
        class="dropdown-item w-100 text-start"
        :class="{ active: selectedIndex === filteredSuggestions.length }"
        @mousedown.prevent="addNewItem"
      >
        Add "{{ searchQuery }}"
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  suggestions: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "Type to search or add new items...",
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue", "add", "input"]);

const inputRef = ref(null);
const searchQuery = ref("");
const showSuggestions = ref(false);
const selectedIndex = ref(-1);
const selectedItems = ref([...props.modelValue]);

const filteredSuggestions = computed(() => {
  if (!searchQuery.value)
    return props.suggestions.filter(
      (item) => !selectedItems.value.includes(item)
    );

  return props.suggestions.filter(
    (suggestion) =>
      suggestion.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
      !selectedItems.value.includes(suggestion)
  );
});

const exactMatch = computed(() => {
  return props.suggestions.some(
    (suggestion) => suggestion.toLowerCase() === searchQuery.value.toLowerCase()
  );
});

const focusInput = () => {
  inputRef.value?.focus();
};

const handleInput = () => {
  showSuggestions.value = true;
  selectedIndex.value = -1;
};

const handleEnter = () => {
  if (selectedIndex.value >= 0) {
    if (selectedIndex.value < filteredSuggestions.value.length) {
      selectSuggestion(filteredSuggestions.value[selectedIndex.value]);
    } else {
      addNewItem();
    }
  } else if (searchQuery.value && !exactMatch.value) {
    addNewItem();
  }
};

const handleArrowDown = () => {
  const maxIndex =
    filteredSuggestions.value.length + (exactMatch.value ? 0 : 1) - 1;
  selectedIndex.value =
    selectedIndex.value < maxIndex ? selectedIndex.value + 1 : -1;
};

const handleArrowUp = () => {
  const maxIndex =
    filteredSuggestions.value.length + (exactMatch.value ? 0 : 1) - 1;
  selectedIndex.value =
    selectedIndex.value > -1 ? selectedIndex.value - 1 : maxIndex;
};

const handleBackspace = () => {
  if (!searchQuery.value && selectedItems.value.length > 0) {
    removeItem(selectedItems.value[selectedItems.value.length - 1]);
  }
};

const handleBlur = () => {
  setTimeout(() => {
    showSuggestions.value = false;
    selectedIndex.value = -1;
    searchQuery.value = "";
  }, 200);
};

const selectSuggestion = (suggestion) => {
  if (!selectedItems.value.includes(suggestion)) {
    selectedItems.value = [...selectedItems.value, suggestion];
    emit("input", selectedItems.value);
  }
  searchQuery.value = "";
  showSuggestions.value = false;
};

const addNewItem = () => {
  if (searchQuery.value && !selectedItems.value.includes(searchQuery.value)) {
    const newItem = searchQuery.value.trim();
    selectedItems.value = [...selectedItems.value, newItem];
    emit("add", newItem);
    emit("input", selectedItems.value);
    searchQuery.value = "";
    showSuggestions.value = false;
  }
};

const removeItem = (item) => {
  selectedItems.value = selectedItems.value.filter((i) => i !== item);
};
</script>

<style scoped>
.dropdown-item {
  cursor: pointer;
  padding: 0.5rem 1rem;
}

.dropdown-item:hover,
.dropdown-item.active {
  background-color: #e9ecef;
  color: #16181b;
}

.min-h-auto {
  min-height: auto;
}

.min-w-50 {
  min-width: 50px;
}
</style>
