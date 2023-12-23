<template>
 <div class="col-12 col-lg-5 w-sm-100 technology-card" :class="classObject">
    <div class="language">
        <p>{{ name }}</p>
        <span class="title text-start">Programming Language(s)</span>
        <div v-if="stacks && stacks.length > 0" class="stacks">
            <StackCard v-for="stack in stacks" :key="stack" :stack="stack" />
        </div>
        <span class="not-available" v-else>None Yet</span>
    </div>
    <div class="framework">
        <span class="title">Framework</span>
        <div v-if="frameworks && frameworks.length > 0" class="stacks">
            <StackCard v-for="framework in frameworks" :key="framework" :stack="framework" />
        </div>
        <span class="not-available" v-else>None Yet</span>
    </div>
 </div>
</template>

<script>
import StackCard from '@/components/details/StackCard.vue'
export default {
    props: ['name', 'stacks', 'frameworks', 'classObject'],
    name: 'TechnologyInfoCard',
    components: {
        StackCard
    }
}
</script>

<style>
.technology-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    width: 400px;
    height: 222px;
    padding: 24px;
    gap: 24px;
    border-radius: 15px;
    background-color: #FFFFFF;
}
.language p {
    color: #27272E;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 136.023%;
    text-transform: uppercase;
    text-align: left;
}
.stacks {
    color: #425466;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    margin-bottom: 8px;
}
.language div {
    display: flex;
    gap: 12px;
}
.framework, .language {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
}
.framework div {
    display: flex;
    gap: 12px;
}
.not-available {
    font-size: 12px;
    font-style: italic;
    color: #425466;
}
</style>