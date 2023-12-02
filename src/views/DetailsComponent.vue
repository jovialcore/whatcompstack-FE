<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="d-flex justify-content-center mt-5" v-if="!isLoading">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="row mb-5" v-else>
            <div class="col-md-6 col-lg-4 mb-3">
                <div class="card h-auto">
                    <img class="card-img-top company-logo" width="200" height="200" :src="company.logo"
                        alt="company logo" />
                    <div class="card-body">
                        <h5 class="card-title fst-normal"> {{ company.company }}</h5>
                        <p class="card-text">{{ company.about }}</p>
                        <a :href="company.company_url" target="_blank" class="btn btn-outline-secondary">Visit Company
                            website </a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-8">
                <h4 class="pb-1 mb-1 text-start">Technology</h4>
                <div class="row p-2 justify-content-around">
                    <div class="card text-start mb-3 col me-3 stackHeight" >
                        <TechnologyInfoCardBe title="Backend" :stacks="stack_be" :frameworks="be_framework" />
                        <!-- <TechnologyInfoCard title="Devops" :stacks="company.devops" /> -->
                        <!-- <TechnologyInfoCard title="Database" :stacks="company.database_driver" /> -->
                    </div>

                    <div class="card text-start mb-3 col stackHeight"  >
                        <TechnologyInfoCardFe title="Frontend" :stacks="stack_fe" :frameworks="fe_framework" />

                    </div>
                </div>
                <h4 class="mt-4 text-start">Human/Business</h4>
                <div class="card text-start mb-3 w-100">
                    <div class="row">

                        <HumanInfoCard title="CTO" :body="company.ceo" :link="company.ceo_contact" />
                        <HumanInfoCard title="CEO" :body="company.cto_name" :link="company.cto_contact" />
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
import TechnologyInfoCardBe from '@/components/details/CompanyInfoCard/TechnologyInfoCardBe.vue'
import TechnologyInfoCardFe from '@/components/details/CompanyInfoCard/TechnologyInfoCardFe.vue'
import { ref } from 'vue'

export default {
    props: ['id'],
    name: 'DetailsComponent',
    components: {
        HumanInfoCard,
        TechnologyInfoCardBe,
        TechnologyInfoCardFe
    },

    setup(props) {

        const fe_framework = ref([])

        const {
            company,
            isLoading,
            stack_be,
            stack_fe,
            be_framework
        } = getCompany(props.id)

        return {
            company,
            isLoading,
            stack_be,
            stack_fe,
            be_framework,
            fe_framework
        }
    }
}
</script>

<style>
.company-logo {
    object-fit: contain;
}

.stackHeight {
    height: fit-content;
}
</style>