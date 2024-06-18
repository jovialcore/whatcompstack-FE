<template>
	<div class="layout-wrapper layout-content-navbar layout-without-menu">
		<div class="layout-container">
			<div class="layout-page">
				<div class="content-wrapper">
					<Header />

					<NuxtLoadingIndicator />

					<NuxtPage />


					<Toaster position="top-right" theme="dark" richColors />

					<Footer />
				</div>
			</div>
		</div>
	</div>
</template>


<script setup>


</script>