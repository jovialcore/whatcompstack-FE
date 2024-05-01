<template>
    <div class="container-fluid">


        <div class="d-flex justify-content-start align-items-center gap-2 ms-md-5 mb-3 mb-md-5">
            <router-link to="/" class="text-black">
                Home
            </router-link>

            <font-awesome-icon icon="fa-solid fa-angle-right" />

            <span style="color: #17A1FA; cursor: pointer;">{{ company.company.charAt(0).toUpperCase() }}{{company.company.slice(1).toLowerCase() }}</span>
        </div>


        <div class="row  g-0 justify-content-center justify-content-md-evenly ">
            <!-- image start -->
            <div class="col-12 col-md-5 col-lg-3">
                <div class="card company-card">
                    <img :src="company.logo" class="card-img-top h-50 mx-100" alt="">
                    <div class="company-card-body w-100">
                        <span class="company-name">{{ company.company.toUpperCase() }}</span>
                        <div class="d-inline">
                            <span v-if="showLess" class="company-info">{{ company.about.slice(0, 200) }}...</span>
                            <span v-else class="company-info">{{ company.about }}</span>
                            <span @click="toggleShowLess" style="color: #17A1FA; cursor: pointer;">
                                {{ showLess ? "read more" : "read less" }}
                            </span>
                        </div>
                    </div>
                    <a :href="company.company_url" target="_blank" class="company-link">
                        <span>Visit company website</span>
                        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" style="color: white;" />
                    </a>
                </div>
            </div>

            <!-- image end -->


            <div class="col-12 col-md-5 col-lg-7">

                <div class="row flex-column flex-lg-row  mt-4 mt-md-0 info-card px-3">
                    <DetailsTechnologyInfoCard name="Backend" :title="['Programming Language(s)', 'Framework']"
                        :stacks="[stack_be, be_framework]" />


                    <DetailsTechnologyInfoCard name="Frontend" :title="['Programming Language(s)', 'Framework']"
                        :stacks="[['JavaScript'], stack_fe]"
                        :classObject="{ 'd-none': company.is_mobile_only || stack_fe?.length === 0 }" />


                    <DetailsTechnologyInfoCard name="Mobile" :title="['Programming/Frameworks']"
                        :stacks="[mobile_stacks]" :classObject="{ 'd-none': mobile_stacks?.length === 0 }" />
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>


const showLess = ref(true);

const toggleShowLess = () => {
    showLess.value = !showLess.value;
};

let company = ref(null);

let stack_be = ref([]);
let stack_fe = ref([]);
let be_framework = ref([]);
let mobile_stacks = ref([]);

const route = useRoute()

try {
    const { data: detail } = await useFetch(() => `https://admin.whatcompanystack.com/api/company/stack/details/${route.params.company_name}`)

    company.value = detail.value.data;


    stack_be.value = getStacks(company.value.stack_be_plang);

    stack_fe.value = getStacks(company.value.stack_fe_framework);

    be_framework.value = getStacks(company.value.stack_be_framework);

    mobile_stacks.value = getStacks(company.value.stack_mobile);

    console.log(stack_be.value)


} catch (err) {
    company.value = null;
}


</script>

<style>
.company-card {
    border-radius: 20px;
    border: 0.2px solid #3A3A3A;
}

.company-card-body {
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: stretch;
}

.company-name {
    color: #000;
    text-align: center;

    font-size: 31px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
}

.company-info {
    color: #3A3A3A;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.5px;
    margin-right: 10px;
}

.company-link-container {
    display: flex;
    height: 48px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 8px;
    background: #424B5A;
}

.company-link {
    display: flex;
    border-radius: 8px;
    background: #424B5A;
    padding: 10px;
    margin: 16px;
    align-items: center;
    gap: 10px;
    justify-content: center;
    align-self: stretch;
    cursor: pointer;
}

.company-link span {
    color: #FFF;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
}

.info-card {
    gap: 40px;
}

@media (max-width: 768px) {
    .info-card {
        gap: 20px;
    }
}
</style>
