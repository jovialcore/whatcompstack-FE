<template>
    <div class="col-md-6 col-lg-4 mb-3">
        <div class="card text-start" style="">
            <div class="card-body my-0">
                <div class="row justify-content-between" style="">

                    <div class="col-sm-9 col-8">
                        <h4 class="card-title">{{ company.company }}</h4>
                        <p class="card-text">

                            <span><b>Backend:</b></span><span class="ms-1" v-for="stack_be in stacks_be " :key="stack_be">
                                {{
                                    stack_be }}</span>
                            <br />

                            <span v-if="stacks_fe.length !== 0"><b> Frontend: </b> <span class="ms-1"
                                    v-for="stack_fe in stacks_fe" :key="stack_fe">
                                    {{
                                        stack_fe
                                    }} </span>
                            </span>
                            <span v-else></span>
                        </p>
                    </div>
                    <div class="col-sm-3 col-4" style=" width: 100px; height: 100px;">
                        <img class="img-fluid mt-3 mt-sm-auto" :src="company.logo" alt="Card image"
                            style=" border-radius: 50%; vertical-align:bottom;" />
                    </div>
                </div>
                <router-link :to="{ name: 'Details', params: { id: company.id } }" class="btn btn-outline-secondary mt-3">
                    Learn More
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import getStacks from '@/composables/getStacks'

export default {
    props: ['company'],
    name: 'CompanyListItem',
    components: {

    },
    setup(props) {
        
        const stacks_be = getStacks(props.company.stack_be_plang)

        const stacks_fe = getStacks(props.company.stack_fe_framework)

        return {
            stacks_be,
            stacks_fe
        }
    }
}
</script>

<style>
.card-title {
    font-style: normal !important;
}
</style>