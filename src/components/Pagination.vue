<template>
	<nav aria-label="Page navigation example">
		<ul class="pagination justify-content-center">
			<li class="page-item">
				<a
					class="page-link"
					aria-label="Previous"
					@click.prevent="previousPage"
					:class="{ disabled: currentPage === 1 }"
				>
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			<li
				v-for="pageNumber in paginationCount"
				:key="pageNumber"
				@click.prevent="gotoPage(pageNumber)"
				class="page-item"
				:class="{ active: pageNumber === currentPage }"
			>
				<a class="page-link">{{ pageNumber }}</a>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					aria-label="Next"
					@click.prevent="nextPage"
					:class="{ disabled: currentPage === paginationCount }"
				>
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	import { ref } from "vue";

	export default {
		props: ["paginationCount"],
		name: "PaginationComponent",

		setup(props, { emit }) {
			const currentPage = ref(1);

			const previousPage = () => {
				if (currentPage.value > 1) {
					currentPage.value -= 1;
				}
				emit("pageChange", currentPage.value);
			};

			const nextPage = () => {
				if (currentPage.value < props.paginationCount) {
					currentPage.value += 1;
				}
				emit("pageChange", currentPage.value);
			};

			const gotoPage = (pageNumber) => {
				currentPage.value = pageNumber;
				emit("pageChange", currentPage.value);
			};

			return { currentPage, previousPage, nextPage, gotoPage };
		},
	};
</script>

<style>
	.page-item {
		cursor: pointer;
	}
</style>
