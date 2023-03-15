<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row mb-5">
            
            <ResultCard />

        </div>
    </div>
</template>

<script>
import ResultCard from './content-card/ResultCard.vue';

export default {
    name: 'ContentComponent',
    components: { ResultCard }
}
</script>