<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="d-flex justify-content-center mt-5" v-if="!isLoading">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="row mb-5" v-else>
            <div class="col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                    <img class="card-img-top company-logo" width="200" height="200" :src="company.logo" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title fst-normal"> {{ company.name }}</h5>
                        <p class="card-text">{{ company.about }}</p>
                        <a href="#" class="btn btn-outline-secondary">Visit Company website </a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-8">
                <h4 class="pb-1 mb-4 text-start">Technology</h4>
                <div class="card text-start  mb-3 w-100">

                    <div class="row">
                        <TechnologyInfoCard title="Backend" :stacks="company.stack_be" />
                        <TechnologyInfoCard title="Frontend" :stacks="company.stack_fe" />
                        <TechnologyInfoCard title="Devops" :stacks="company.devops" />
                        <TechnologyInfoCard title="Backend" :stacks="company.database_driver" />
                    </div>

                </div>
                <h4 class="mt-4 text-start">Human/Business</h4>
                <div class="card text-start  mb-3 w-100">
                    <div class="row">
                        <HumanInfoCard title="CTO" :body="company.ceo" :link="company.ceo_contact" />
                        <HumanInfoCard title="CEO" :body="company.cto" :link="company.cto_contact" />
                        <HumanInfoCard title="Human Resource" :body="company.hr" :link="company.hr_contact" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getCompany from '@/composables/getCompany'
import HumanInfoCard from '@/components/details/CompanyInfoCard/HumanInfoCard.vue'
import TechnologyInfoCard from '@/components/details/CompanyInfoCard/TechnologyInfoCard.vue'

export default {
    props: ['id'],
    name: 'DetailsComponent',
    components: {
        HumanInfoCard,
        TechnologyInfoCard
    },

    setup(props) {
        
        const { company, isLoading } = getCompany(props.id)

        return { company, isLoading }
    }
}
</script>

<style>

.company-logo {
    object-fit: cover;
}

</style>