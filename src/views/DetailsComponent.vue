<template>
	<div class="container-xxl flex-grow-1 container-p-y">
		<div class="d-flex justify-content-center mt-5" v-if="!isLoading">
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
		<div class="row justify-content-around" v-else>
			<div class="d-flex justify-content-start align-items-center gap-2 ms-0 ms-md-5" style="margin-bottom: 50px;">
				<router-link to="/" class="text-black">
					Home
				</router-link>
				<font-awesome-icon icon="fa-solid fa-angle-right" />
				<span style="color: #17A1FA; cursor: pointer;">{{ company.company.charAt(0).toUpperCase() }}{{ company.company.slice(1).toLowerCase() }}</span>
			</div>
			<div class="col-6 col-lg-4 me-0" style="width: 360px; margin-right: 40px;">
				<div class="card company-card">
					<img :src="company.logo" class="card-img-top company-logo" alt="" >
					<div class="company-card-body w-100">
						<span class="company-name">{{ company.company.toUpperCase() }}</span>
						<span class="company-info">{{ company.about }}</span>
					</div>
					<a :href="company.company_url" target="_blank" class="company-link">
						<span>Visit company website</span>
						<font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" style="color: white;" />
					</a>
				</div>
			</div>
			<div class="col-6 col-lg-8">
				<div class="row mt-4 mt-md-0 mt-lg-0 info-card">
					<TechnologyInfoCard
						name="Backend"
						:stacks="stack_be"
						:frameworks="be_framework" />
					<TechnologyInfoCard
						name="Frontend"
						:stacks="['JavaScript']"
						:frameworks="stack_fe"
						:classObject="{'d-none': company.is_mobile_only || stack_fe.length === 0 }"
					/>
					<TechnologyInfoCard
						name="Mobile"
						:frameworks="mobile_stacks"
						:classObject="{'d-none': mobile_stacks.length === 0 }"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import TechnologyInfoCard from "@/components/details/TechnologyInfoCard.vue";
	import getCompany from "@/composables/getCompany";
	import { ref } from "vue";
	import { useStore } from "vuex";
	import { useRouter } from "vue-router";

	export default {
		name: "DetailsComponent",
		components: {
			TechnologyInfoCard,
		},

		setup() {
			const store = useStore();
			const router = useRouter();
			const id = ref(store.state.companyId);

			const goBack = () => {
				router.go(-1);
			};

			const { company, isLoading, stack_be, stack_fe, be_framework, mobile_stacks } = getCompany(
				id.value
			);

			return {
				company,
				isLoading,
				stack_be,
				stack_fe,
				be_framework,
				mobile_stacks,
				goBack,
			};
		},
	};
</script>

<style>
.company-logo {
	object-fit: fit-content;
	object-position: center;
	height: 246.521px;
}
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
	font-family: Roboto;
	font-size: 31px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
}
.company-info {
	color: #3A3A3A;
	text-align: center;
	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 23px;
	letter-spacing: 0.5px;
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
	font-family: Roboto;
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
</style>
