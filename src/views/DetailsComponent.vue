<template>
	<div class="container-xxl flex-grow-1 container-p-y">
		<div class="d-flex pb-2 back-btn" @click="goBack()">
			<font-awesome-icon
				icon="fa-solid fa-arrow-left"
				class="d-flex justify-content-start"
				size="lg"
			/>
			<span class="text-start ms-2">Go Back</span>
		</div>
		<div class="d-flex justify-content-center mt-5" v-if="!isLoading">
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
		<div class="row mb-5" v-else>
			<div class="col-md-6 col-lg-4 mb-3">
				<div class="card h-auto">
					<img
						class="card-img-top company-logo"
						width="200"
						height="200"
						:src="company.logo"
						alt="company logo"
					/>
					<div class="card-body">
						<h5 class="card-title fst-normal">{{ company.company }}</h5>
						<p class="card-text">{{ company.about }}</p>
						<a
							:href="company.company_url"
							target="_blank"
							class="btn btn-outline-secondary"
							>Visit Company website
						</a>
					</div>
				</div>
			</div>

			<div class="col-md-6 col-lg-8">
				<h4 class="pb-1 mb-1 text-start">Technology</h4>
				<div class="row p-2 p-lg-0 gap-2">
					<div
						class="flex-fill card text-start p-0 mb-3 col-12 col-md-12 col-lg-5 stackHeight"
					>
						<TechnologyInfoCardBe
							title="Backend"
							:stacks="stack_be"
							:frameworks="be_framework"
						/>
						<!-- <TechnologyInfoCard title="Devops" :stacks="company.devops" /> -->
						<!-- <TechnologyInfoCard title="Database" :stacks="company.database_driver" /> -->
					</div>
					<div
						class="flex-fill card text-start p-0 mb-3 col-12 col-md-12 col-lg-5 stackHeight"
					>
						<TechnologyInfoCardFe
							title="Frontend"
							:stacks="fe_stack"
							:frameworks="stack_fe"
						/>
					</div>
					<div
						class="flex-fill card text-start p-0 mb-3 col-12 col-md-12 col-lg-5 stackHeight"
					>
						<TechnologyInfoCardFe
							title="Mobile"
							:stacks="fe_stack"
							:frameworks="stack_fe"
						/>
					</div>
				</div>
				<!-- <h4 class="mt-4 text-start">Human/Business</h4>
                <div class="card text-start mb-2 w-100">
                    <div class="row">

                        <HumanInfoCard title="CTO" :body="company.ceo" :link="company.ceo_contact" />
                        <HumanInfoCard title="CEO" :body="company.cto_name" :link="company.cto_contact" />
                        <HumanInfoCard title="Human Resource" :body="company.hr" :link="company.hr_contact" />
                    </div>

                </div> -->
			</div>
		</div>
	</div>
</template>

<script>
	import getCompany from "@/composables/getCompany";
	// import HumanInfoCard from '@/components/details/CompanyInfoCard/HumanInfoCard.vue'
	import TechnologyInfoCardBe from "@/components/details/CompanyInfoCard/TechnologyInfoCardBe.vue";
	import TechnologyInfoCardFe from "@/components/details/CompanyInfoCard/TechnologyInfoCardFe.vue";
	import { ref } from "vue";
	import { useStore } from "vuex";
	import { useRouter } from "vue-router";

	export default {
		name: "DetailsComponent",
		components: {
			// HumanInfoCard,
			TechnologyInfoCardBe,
			TechnologyInfoCardFe,
		},

		setup() {
			const store = useStore();
			const router = useRouter();
			const fe_stack = ref(["JavaScript"]);
			const id = ref(store.state.companyId);

			const goBack = () => {
				router.go(-1);
			};

			const { company, isLoading, stack_be, stack_fe, be_framework } = getCompany(
				id.value
			);

			return {
				company,
				isLoading,
				stack_be,
				stack_fe,
				fe_stack,
				be_framework,
				goBack,
			};
		},
	};
</script>

<style>
	.company-logo {
		object-fit: contain;
	}
	.stackHeight {
		height: fit-content;
	}
	.back-btn {
		cursor: pointer;
	}
</style>
