<template>
    <div class="col-md-6 col-lg-4 mb-3">
        <div class="card text-start" style="">
            <div class="card-body my-0">
                <div class="row justify-content-between" style="">
                    <div class="col-sm-9 col-8">
                        <h4 class="card-title">{{ company.company }} </h4>
                        <p class="card-text">
                            <span><b>Backend:</b></span><span class="ms-1" v-for="stack_be in stacks_be"
                                :key="stack_be">
                                {{ stack_be }}</span>
                            <br />

                            <span v-if="stacks_fe"><b> Frontend: </b>
                                <span class="ms-1" v-for="stack_fe in stacks_fe" :key="stack_fe">
                                    {{ stack_fe }}
                                </span>
                            </span>

                            <span v-if="stacks_mobile">
                                <b> Mobile: </b>
                                <span class="ms-1" v-for="stack_mobile in stacks_mobile" :key="stack_mobile">
                                    {{ stack_mobile }}
                                </span>
                            </span>
                            <span v-else></span>
                        </p>
                    </div>
                    <div class="col-sm-3 col-4" style="width: 100px; height: 100px">
                        <img class="img-fluid mt-3 mt-sm-auto" :src="company.logo" alt="Card image"
                            style="border-radius: 50%; vertical-align: bottom" />
                    </div>
                </div>
           

                    <NuxtLink :to="{ path: company.company, query: { id: company.id } }" class="btn btn-outline-secondary mt-3"> Learn More
                    </NuxtLink>
            
            </div>
        </div>
    </div>
</template>

<script>



export default {
    props: ["company"],

    setup(props) {

        const stacks_be = getStacks(props.company.stack_be_plang);
        const stacks_fe = getStacks(props.company.stack_fe_framework);
        const stacks_mobile = getStacks(props.company.stack_mobile);

        return {
            stacks_be,
            stacks_fe,
            stacks_mobile,
            //navigateToCompany,
        };
    },
};
</script>

<style>
.card-title {
    font-style: normal !important;
}

.wcs-link {
    color: blue;
    text-decoration: none;
}

.wcs-link:hover {
  
    color: white;
}
</style>
