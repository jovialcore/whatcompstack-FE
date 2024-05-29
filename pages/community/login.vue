<template>
	<div class="container-xxl flex-grow-1 container-p-y ">
		<div class="row align-items-center justify-content-center">
			<div class="col-6 rounded bg-dark p-3">
				<form @submit.prevent="handleLogin">
					<div class="mb-3">
						<label for="formGroupExampleInput" class="form-label">Name</label>
						<input type="text" class="form-control" id="formGroupExampleInput"
							placeholder="Example input placeholder">
					</div>
					<div class="mb-3">
						<label for="formGroupExampleInput" class="form-label">Email</label>
						<input type="text" class="form-control" id="formGroupExampleInput"
							placeholder="Example input placeholder">
					</div>
					<div class="mb-3">
						<label for="formGroupExampleInput2" class="form-label">Password</label>
						<input type="text" class="form-control" id="formGroupExampleInput2"
							placeholder="Another input placeholder">
					</div>
					<div class="mb-3">
						<label for="formGroupExampleInput2" class="form-label">Linkedin Url</label>
						<input type="text" class="form-control" id="formGroupExampleInput2"
							placeholder="Another input placeholder">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
const email = ref("");
const password = ref("");
const error = ref("");

const form = ref({
	email: "jovialcore@gmail.com",
	password: "jovialcore224",

})

function handleLogin (param) { 

 }
 
const login = () => {
	if (email.value === "admin" && password.value === "password") {
		// Redirect to dashboard or perform any other action upon successful login
		alert("Login successful!");
	} else {
		error.value = "Invalid email or password";
	}
};
</script>

<style scoped>
.row {

	height: 100%;
}
</style>