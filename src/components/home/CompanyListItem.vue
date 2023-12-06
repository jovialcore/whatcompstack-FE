<template>
    <div class="col-md-6 col-lg-4 mb-3">
        <div class="card text-start" style="">
            <div class="card-body my-0">
                <div class="row justify-content-between" style="">
    
                    <div class="col-6">
                        <h4 class="card-title">Eden Life</h4>
                        <p class="card-text">
                            <span><b> Frontend: </b> </span> Vuejs, React
                            <br />
                            <span><b> Backend: </b></span> PHP, Laravel
                        </p>
                    </div>

                    <div class="col-6 " style=" width: 100px; height: 100px; ;">
                        <img class="img-fluid mt-3 mt-sm-auto" :src="company.logo" alt="Card image"
                            style=" border-radius: 50%; vertical-align:bottom;" />
                    </div>
                </div>
                <router-link :to="{ name: 'Details', params: { id: company.id } }" class="btn btn-primary">
                    Learn More
                </router-link>


            </div>
        </div>
    </div>
</template>

<script>
// import CompanyListDetail from '@/components/home/CompanyListDetail.vue';
import getStacks from '@/composables/getStacks'

export default {
    props: ['company'],
    name: 'CompanyListItem',
    components: {
        // CompanyListDetail
    },
    setup(props) {

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
.card-title {
    font-style: normal !important;
}
</style>