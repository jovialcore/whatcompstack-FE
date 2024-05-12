<template>
	<div class="container">
		<div v-if="error" style="color: red; margin-top: 10px">{{ error }}</div>
		<div class="form-group">
			<label for="email">Email</label>
			<input type="text" id="Email" v-model="email" placeholder="Enter your email" />
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				v-model="password"
				placeholder="Enter your password"
			/>
		</div>
		<button @click="login">Login</button>
	</div>
</template>

<script setup>
	const email = ref("");
	const password = ref("");
	const error = ref("");

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
	.container {
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.form-group {
		margin-bottom: 15px;
	}

	label {
		display: block;
		font-weight: bold;
	}

	input[type="text"],
	input[type="password"] {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		box-sizing: border-box;
		border-top: none;
		border-left: none;
		border-right: none;
	}

	input[type="text"]:focus,
	input[type="password"]:focus {
		outline: none;
		border-color: #233446;
	}

	button {
		width: 100%;
		padding: 10px;
		background-color: #233446;
		color: #fff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
