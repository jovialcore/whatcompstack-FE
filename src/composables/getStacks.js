import { ref } from "vue";

const getStacks = (stacks) => {
	let stack_list = ref([]);

	if (!stacks || stacks.length === 0) {
		return stack_list.value;
	}

	stack_list.value = stacks.map((obj) => Object.keys(obj)[0]);

	return stack_list.value;
};

export default getStacks;
