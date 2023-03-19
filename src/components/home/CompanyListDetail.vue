<template>
    <span class="card-text">
        <div>
            <label class="fw-bold">{{ stack }}:</label>
            <span class="d-inline-block ms-1 text-capitalize" v-for="stack in stacks.slice(0, 3)" :key="stack">{{ stack }}</span>
        </div>
    </span>
</template>

<script>
export default {
    props: ['stack', 'stacks'],
    name: 'CompanyListDetail'
}
</script>