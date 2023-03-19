<template>
    <div class="col">
        <div class="card-body py-4">
            <h5 class="card-title fst-normal">{{ title }}</h5>
            <p class="card-text">
                <span class="badge bg-label-dark mb-1 me-1" v-for="stack in stacks" :key="stack">
                    {{ stack }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['class', 'title', 'stacks'],
    name: 'TechnologyInfoCard'
}
</script>