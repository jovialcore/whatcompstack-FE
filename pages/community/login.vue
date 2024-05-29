<template>
	<div class="container-xxl flex-grow-1 container-p-y ">
		<div class="row align-items-center justify-content-center">

			<div class="col-6 rounded bg-dark p-3 text-white ">
				<p> Welcome to What-Company-Stack Community </p>
				<form @submit.prevent="handleLogin">
					<div class="mb-3">
						<label class="form-label">Email</label>
						<input type="email" class="form-control" 
							placeholder="Enter your email..." v-model="form.email">
					</div>
					<div class="mb-3">
						<label class="form-label">Password</label>
						<input type="password" class="form-control"
							placeholder="Enter your password..." v-model="form.password">
					</div>
					<button class="btn btn-success text-white" > Submit </button>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
;

const form = ref({
	email: "joviclore@gmail.com",
	password: "jovialpPass2",
})

async function handleLogin() {

	console.log(' I was severly hit');

	await useFetch("http://127.0.0.1:8000/sanctum/csrf-cookie")

}

</script>

<style scoped>
.row {

	height: 100%;
}
</style>