<template>
    <div class="stack-card">
        <span>{{ stack }}</span>
    </div>
</template>

<script>
export default {
    props: ['stack'],
    name: 'StackCard'
}
</script>

<style>
.stack-card {
    padding: 2px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #E4ECF7;
}
.stack-card span {
    color: #505780;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    text-transform: uppercase;
}
</style>