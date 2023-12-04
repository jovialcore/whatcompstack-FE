<template>
    <!-- <span class="card-text">
        <div>
            <label class="fw-bold">{{ stack }}:</label>
            <span class=" ms-1 text-capitalize" v-for="stack in stacks" :key="stack">{{ stack }}</span>
        </div>
    </span> -->

    <p class="card-text">
        <span v-if="stacks.length !== 0">
            <label class="fw-bold">{{ stack }}:</label>

            <span class=" ms-1 text-capitalize" v-for="stack in stacks" :key="stack">{{ stack }}</span>
        </span>
    </p>



</template>

<script>
export default {
    props: ['stack', 'stacks'],
    name: 'CompanyListDetail'
}
</script>