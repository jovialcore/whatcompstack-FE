import { ref } from "vue";

const getStacks = (stacks) => {
	let stack_list = ref([]);

	if (!stacks || stacks.length === 0) {
		return stack_list.value;
	}

	stacks.forEach((obj) => {
		const stack = Object.keys(obj)[0];
		stack_list.value = [...stack_list.value, stack];
	});

	return stack_list.value;
};

export default getStacks;
