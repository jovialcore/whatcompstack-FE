<template>
    <div class="language">
        <span class="title text-start">{{ title }}</span>
        <div v-if="stacks && stacks.length > 0" class="stacks">
            <StackCard v-for="stack in stacks" :key="stack" :stack="stack" />
        </div>
        <span class="not-available" v-else>We have no list at the moment</span>
    </div>
</template>

<script>
import StackCard from '@/components/details/StackCard.vue'

export default {
    props: ['stacks', 'title'],
    name: 'TechnologyCard',
    components: {
        StackCard
    },
}
</script>

<style>
.stacks {
    color: #425466;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    margin-bottom: 8px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.language {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
}

.not-available {
    font-size: 12px;
    font-style: italic;
    color: #425466;
}
</style>