
<template>

	<div class="container-xxl flex-grow-1 container-p-y ">

		<p> Verify emails here and send the person to another place

			{{ $route.params.email_verif_info }}
		</p>

	</div>
</template>


<script setup>
import { useAuthStore } from '~/store/useAuthStore';

const route = useRoute();

const auth = useAuthStore()

const routeId = route.params.email_verif_info[0]

const hash = route.params.email_verif_info[1]

await auth.verifyEmailUrl(routeId, hash);

</script>