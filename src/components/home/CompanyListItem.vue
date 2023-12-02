<template>
    <div class="col-md-4 mb-3">
        <div class="card px-2">
            <div class="row g-0">
                <div class="col-md-4 img-card ">
                    <img class="card-img card-img-left cmp-logo h-100 w-100" :src="company.logo" alt="Card image" />
                </div>
                <div class="col-md-8">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{ company.company }} </h5>
                        <div>
                            <CompanyListDetail stack="Backend" :stacks="stack_be" />
                            <CompanyListDetail stack="Frontend" :stacks="stack_fe" />
                        </div>
                    </div>
                    <router-link :to="{ name: 'Details', params: { id: company.id } }">
                        <span class="btn btn-dark  mb-3">View More</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CompanyListDetail from '@/components/home/CompanyListDetail.vue';
import getStacks from '@/composables/getStacks'

export default {
    props: ['company'],
    name: 'CompanyListItem',
    components: { 
        CompanyListDetail 
    },
    setup(props){

        const stack_be = getStacks(props.company.stack_be_plang)

        const stack_fe = getStacks(props.company.stack_fe_framework)

        return {
            stack_be,
            stack_fe
        }
    }
}
</script>

<style>
.cmp-logo {
    object-fit: contain;
}
.card-title {
    font-style: normal !important;
}
</style>