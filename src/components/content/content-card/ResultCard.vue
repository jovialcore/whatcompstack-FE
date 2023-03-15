<template>
    <div class="col-md-4" v-for="company in companies" :key="company.id">
        <div class="card mb-3">
            <div class="row g-0 mb-2">
                <div class="col-md-4 img-card">
                    <img class="card-img card-img-left" src="@/assets/img/elements/12.jpg" alt="Card image" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ company.name }}</h5>
                        <span class="card-text">
                            <div>
                                <label>Backend:</label>
                                <span v-for="stack in company.stack_be.slice(0, 3)" :key="stack">{{ stack }}</span>
                            </div>
                        </span>
                        <span class="card-text">
                            <div>
                                <label>Frontend:</label>
                                <span v-for="stack in company.stack_fe.slice(0, 3)" :key="stack">{{ stack }}</span>
                            </div>
                        </span>
                    </div>
                    <router-link :to="{name: 'Details', params: { id: company.id}}">
                        <span class="btn btn-dark btn-sm">view more</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getCompanies from '@/composables/getCompanies';

export default {
    setup() {

        const { companies } = getCompanies();

        return { companies }
    }
}

</script>

<style>
.card-text div span {
    display: inline-block;
    margin-left: 5px;
    text-transform: capitalize;
}

.card-text div label {
    font-weight: bold;
}
</style>