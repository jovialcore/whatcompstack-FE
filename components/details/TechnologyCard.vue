<template>
    <div class="language">
        <span class="title text-start">{{ title }}</span>
        <div v-if="stacks?.length > 0" class="stacks">

            <div class="stack-card" v-for="stack in stacks" :key="stack">
                <span>{{ stack }} </span>
            </div>

        </div>
        <span class="not-available" v-else>We have no list at the moment</span>
    </div>
</template>

<script>

export default {
    props: ['stacks', 'title'],
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
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    text-transform: uppercase;
}
</style>