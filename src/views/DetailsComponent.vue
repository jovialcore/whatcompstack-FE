<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <!-- Examples -->
        <div class="row mb-5">
            <div class="col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                    <img class="card-img-top" src="../assets/img/elements/edenlife.jpeg" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title fst-normal"> {{  company.name}}</h5>
                        <p class="card-text">
                            Paystack is a technology company solving payments problems for ambitious businesses. Our mission
                            is to help businesses in Africa become profitable, envied, and loved </p>
                        <a href="javascript:void(0)" class="btn btn-primary">Visit Company website </a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-8">
                <h4 class="pb-1 mb-4 text-start">Technology </h4>
                <div class="card text-start  mb-3 w-100">

                    <div class="row">
                        <div class="col">
                            <div class="card-body py-4">
                                <h5 class="card-title fst-normal">Backend</h5>
                                <p class="card-text">
                                    <span class="badge bg-label-dark" v-for="stack in company.stack_be" :key="stack">{{
                                        stack }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body py-4">
                                <h5 class="card-title fst-normal">Frontend</h5>
                                <p class="card-text">
                                    <span class="badge bg-label-primary" v-for="stack in company.stack_fe" :key="stack">{{
                                        stack }}</span>

                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body py-4">
                                <h5 class="card-title fst-normal">Devops</h5>
                                <p class="card-text">
                                    <span class="badge bg-label-dark" v-for="stack in company.devops" :key="stack">{{ stack
                                    }}</span>

                                </p>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card-body py-4">
                                <h5 class="card-title fst-normal">DATABASE</h5>
                                <p class="card-text">

                                    <span class="badge bg-label-primary" v-for="stack in company.database_driver"
                                        :key="stack">{{ stack }}</span>

                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <h4 class="mt-4 text-start">Human/Business </h4>
                <div class="card text-start  mb-3 w-100">
                    <div class="row">
                        <div class="col">
                            <div class="card-body py-4">
                                <h5 class="card-title fst-normal">CEO</h5>
                                <div class="card-text ">  {{ company.ceo  }}</div>
                                <div> <a href="{{ company.cto_contact }} "><span class="badge bg-info"> Contact </span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body py-4">
                                <h5 class="card-title fst-normal">CTO </h5>
                                <div class="card-text "> {{  company.cto }}</div>
                                <div> <a href="{{ company.cto_contact }} "><span class="badge bg-info"> Contact </span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body py-4">
                                <h5 class="card-title fst-normal">Human Resource</h5>
                                <div class="card-text">Mrs Ngozi</div>
                                <div> <a href="{{ company.cto_contact }} "><span class="badge bg-info"> Contact </span> </a>
                                </div>
                            </div>
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
    /* width: 40%; */
    margin: 0 auto;
    padding: 1.5em;
    border-radius: 5px;
    margin-bottom: 1.5em;
}

/* .detail-card {
    display: flex;
    flex-direction: column;
    align-items: start;
} */
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