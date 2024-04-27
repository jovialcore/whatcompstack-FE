<template>
    <div class="technology-card col" style="border: 3px solid blue;" :class="classObject">
        <span class="stack-name">{{ name }}</span>
        
        <DetailsTechnologyCard v-for="(item, idx) in title" :key="idx" :stacks="stacks[idx]" :title="item" />

    </div>
</template>

<script>

export default {
    props: ['name', 'stacks', 'title', 'classObject'],
}
</script>

<style>
.technology-card {
 
    padding: 24px;
    border-radius: 15px;
    background-color: #FFFFFF;
}

/* @media (min-width: 1024px) {
    .technology-card {
        width: 50%;
    }
} */

.stack-name {
    color: #27272E;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 136.023%;
    text-transform: uppercase;
    text-align: left;
}
</style>
