<template>
    <div class="col">
        <div class="card-body py-4">
            <div class="d-flex align-items-center">
                <h5 v-if="stacks.length !== 0" class="card-title fst-normal pt-3">{{ title }}</h5>
                <button v-if="frameworks.length !== 0" @click="toggleButton()" type="button" class="button btn-primary btn-sm text-sm ms-3">Framework</button>
            </div>
            <p class="card-text">
                <span class="badge bg-label-dark mb-1 me-1" v-for="stack in stacks" :key="stack">
                    {{ stack }}
                </span>
            </p>
            <div v-if="showFramework" class="pt-3">
                <h5 class="card-title fst-normal">{{ title }} Framework</h5>
                <p class="card-text">
                    <span class="badge bg-label-dark mb-1 me-1" v-for="framework in frameworks" :key="framework">
                        {{ framework }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: ['class', 'title', 'stacks', 'frameworks'],
    name: 'TechnologyInfoCard',
    setup() {
        const showFramework = ref(false)

        const toggleButton = () => {
            showFramework.value = !showFramework.value
        }

        return {
            showFramework,
            toggleButton
        }
    }
}
</script>