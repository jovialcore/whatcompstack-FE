<template>
	<div class="container-xxl flex-grow-1 container-p-y ">
		<div class="row align-items-center justify-content-center">

			<div class="col-6 rounded bg-dark p-3 text-white ">
				<p> Welcome to What-Company-Stack Community </p>
				<form @submit.prevent="handleLogin">
					<div class="mb-3">
						<label class="form-label">Email</label>
						<input type="email" class="form-control" placeholder="Enter your email..." v-model="form.email">
					</div>
					<div class="mb-3">
						<label class="form-label">Password</label>
						<input type="password" class="form-control" placeholder="Enter your password..."
							v-model="form.password">
					</div>
					<button class="btn btn-success text-white"> Submit </button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>

const form = ref({
	email: "whatcompanystack@gmail.com",
	password: "60Leaves60@",
})

async function handleLogin() {


	await useFetch("http://127.0.0.1:8002/sanctum/csrf-cookie", {
		credentials: "include"
	})

	const token = useCookie('XSRF-TOKEN');

	await useFetch("http://127.0.0.1:8002/api/login", {

		credentials: "include",
		method: "POST",
		body: form.value,
		watch : false,
		headers: {
			accept: "application/json",
			'X-XSRF-TOKEN': token.value,
		}
	})

}

</script>

<style scoped>
.row {

	height: 100%;
}
</style>