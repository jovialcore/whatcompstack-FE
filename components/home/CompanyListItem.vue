<template>
	<div class="col-md-6 col-lg-4 mb-3">
		<div class="card text-start" style="">
			<div class="card-body my-0">
				<div class="row justify-content-between" style="">
					<div class="col-sm-9 col-8">
						<h4 class="card-title">{{ company.company }}</h4>
						<p class="card-text">
							<span><b>Backend:</b></span
							><span
								class="ms-1"
								v-for="stack_be in stacks_be"
								:key="stack_be"
							>
								{{ stack_be }}</span
							>
							<br />

						</p>
					</div>
					<div class="col-sm-3 col-4" style="width: 100px; height: 100px">
						<img
							class="img-fluid mt-3 mt-sm-auto"
							:src="company.logo"
							alt="Card image"
							style="border-radius: 50%; vertical-align: bottom"
						/>
					</div>
				</div>
				<button
					@click="navigateToCompany(company.id)"
					class="btn btn-outline-secondary mt-3"
				>
					Learn More
				</button>
			</div>
		</div>
	</div>
</template>

<script >

	export default {
		props: ["company"],

		setup(props) {

			const stacks_be = getStacks(props.company.stack_be_plang);
			const stacks_fe = getStacks(props.company.stack_fe_framework);
			const stacks_mobile = getStacks(props.company.stack_mobile);

			const navigateToCompany = (id) => {
				// set company id in store
				store.dispatch("setCompanyId", id);

				// changed route from company id to name
				router.push({
					name: "Details",
					params: { name: props.company.company.toLowerCase().replace(/\s+/g, "-") },
				});
			};
            
			return {
				stacks_be,
				stacks_fe,
				stacks_mobile,
				navigateToCompany,
			};
		},
	};
</script>

<style>
	.card-title {
		font-style: normal !important;
	}
</style>
