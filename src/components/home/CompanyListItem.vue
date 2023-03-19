<template>
    <div class="col-md-4">
        <div class="card mb-3">
            <div class="row g-0 mb-2">
                <div class="col-md-4 img-card">
                    <img class="card-img card-img-left" src="@/assets/img/elements/12.jpg" alt="Card image" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ company.name }}</h5>
                        <CompanyListDetail stack="Backend" :stacks="company.stack_be" />
                        <CompanyListDetail stack="Frontend" :stacks="company.stack_fe" />
                    </div>
                    <router-link :to="{ name: 'Details', params: { id: company.id } }">
                        <span class="btn btn-dark btn-sm">view more</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CompanyListDetail from '@/components/home/CompanyListDetail.vue';

export default {
    props: ['company'],
    name: 'CompanyListItem',
    components: { 
        CompanyListDetail 
    }
}
</script>