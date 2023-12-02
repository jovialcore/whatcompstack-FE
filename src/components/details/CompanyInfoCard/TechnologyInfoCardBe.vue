<template>
 
        <div class="card-body py-3 ">
            <div class="d-flex align-items-center">
                <h5 class="card-title fst-normal pt-3">{{ title }}</h5>
            </div>
            <p class="card-text">
                <span class="badge bg-label-dark mb-1 me-1" v-for="stack in stacks" :key="stack">
                    {{ stack }}
                </span>
            </p>
            <div v-if="frameworks && frameworks.length > 0" class="pt-3">
                <h5 class="card-title fst-normal">{{ title }} Framework</h5>
                <p class="card-text">
                    <span class="badge bg-label-dark mb-1 me-1" v-for="framework in frameworks" :key="framework">
                        {{ framework }}
                    </span>
                </p>
            </div>
        </div>
    
</template>

<script>

export default {
    props: ['class', 'title', 'stacks', 'frameworks'],
    name: 'TechnologyInfoCard',

}
</script>

<style>
.framework {
    box-shadow: 0;
}
</style>
