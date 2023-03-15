<template>
    <div class="layout-wrapper layout-content-navbar layout-without-menu">
            <div class="layout-container">
                <div class="layout-page">
                    <div class="content-wrapper">
                        <div class="content">
                            <router-link :to="{name: 'Home'}">
                                <button class="btn btn-outline-secondary mb-5 d-flex">
                                    <i class="bx bx-arrow-back"></i>
                                    <span class="ms-2">Back</span>
                                </button>
                            </router-link>
                            <div class="detail-card">
                                <label>Name:</label>
                                <span>{{ company.name }}</span>
                            </div>
                            <div class="detail-card">
                                <label>CEO:</label>
                                <span>{{ company.ceo }}</span>
                            </div>
                            <div class="detail-card">
                                <label>CEO Contact:</label>
                                <span>{{ company.ceo_contact }}</span>
                            </div>
                            <div class="detail-card">
                                <label>CTO:</label>
                                <span>{{ company.cto }}</span>
                            </div>
                            <div class="detail-card">
                                <label>CTO Contact:</label>
                                <span>{{ company.cto_contact }}</span>
                            </div>
                            <div class="detail-card">
                                <label>HR:</label>
                                <span>{{ company.hr }}</span>
                            </div>
                            <div class="detail-card">
                                <label>HR Contact:</label>
                                <span>{{ company.hr_contact }}</span>
                            </div>
                            <div class="detail-card">
                                <label>Backend Stacks:</label>
                                <span>
                                    <p class="badge rounded-pill text-bg-secondary" v-for="stack in company.stack_be" :key="stack">{{ stack }}</p>
                                </span>
                            </div>
                            <div class="detail-card">
                                <label>Frontend Stacks:</label>
                                <span>
                                    <p class="badge rounded-pill text-bg-secondary" v-for="stack in company.stack_fe" :key="stack">{{ stack }}</p>
                                </span>
                            </div>
                            <div class="detail-card">
                                <label>DevOps:</label>
                                <span>
                                    <p class="badge rounded-pill text-bg-secondary" v-for="stack in company.devops" :key="stack">{{ stack }}</p>
                                </span>
                            </div>
                            <div class="detail-card">
                                <label>Database Drivers:</label>
                                <span>
                                    <p class="badge rounded-pill text-bg-secondary" v-for="stack in company.database_driver" :key="stack">{{ stack }}</p>
                                </span>
                            </div>
                            <div class="detail-card">
                                <label>Salary Range:</label>
                                <span>{{ company.salary_range }}</span>
                            </div>
                            <div class="detail-card">
                                <label>Testemonials:</label>
                                <span>{{ company.testimonials }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import getCompany from '@/composables/getCompany'

export default {
    props: ['id'],
    name: 'DetailsComponent',

    setup(props) {
        const { company } = getCompany(props.id)

        return { company }
    }
}
</script>

<style>
.content {
    background: white;
    width: 40%;
    margin: 0 auto;
    padding: 1.5em;
    border-radius: 5px;
    margin-bottom: 1.5em;
}
.detail-card {
    display: flex;
    flex-direction: column;
    align-items: start;
}
.detail-card label {
    font-weight: bold;
    font-size: 1.2em;
    text-transform: uppercase;
    margin-bottom: .25em;
    color: #333;
}

.detail-card span {
    font-size: 1.1em;
    color: #666;
    border-bottom: 1px solid #ccc;
    padding-bottom: .5em;
    margin-bottom: 1em;
    width: 100%;
    text-align: left;
}
.badge {
    margin-right: 5px;
    margin-bottom: 0px;
    font-size: 12px;
}
</style>