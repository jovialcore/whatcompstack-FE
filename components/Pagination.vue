<template>
	<nav aria-label="...">
		<ul class="pagination pagination-lg">
			<li class="page-item" v-for="page in totalPages"  @click="$emit('getPaginated', page)" >
				<a class="page-link">{{ page }}</a>
			</li>
		</ul>
	</nav>
</template>


<script setup>

const props = defineProps({ totalPages : Number})

</script>

<style>
.page-item {
	cursor: pointer;
}
</style>