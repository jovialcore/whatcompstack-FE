<template>
	<div class="container-xxl flex-grow-1 container-p-y ">
		<div class="row align-items-center justify-content-center">

			<div class="col-6 rounded bg-dark p-3 text-white ">
				<p> Welcome to What-Company-Stack Community </p>

				<div>
					<p v-if="auth.loginMessage"> {{ auth.loginMessage }} </p>

					<p v-else> Welcome 👋, {{ auth.user?.name }} </p>
				</div>

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

import { useAuthStore } from '~/store/useAuthStore'

const form = ref({
	email: null,
	password: null,
})

const auth = useAuthStore();

async function handleLogin() {

	const { error } = await auth.login(form.value);

	console.log(error)
}
</script>


<style scoped>
.row {

	height: 100%;
}
</style>