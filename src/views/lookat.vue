<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <input  @keypress.enter="search" type="text" v-model="searchTerm" placeholder="Search...">
        <!-- <button>Search</button> -->
        <ul>
            <li v-for="(item, index) in searchResults" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>
  
<script>
import { ref, onMounted} from 'vue';
import axios from 'axios';

export default {
    setup() {
        const searchTerm = ref('');
        const searchResults = ref([]);

        // onst loadAllResult = async () => {

        // }
        onMounted(async () => {
            const response = await axios.get(`https://jovialcore.tech/wsc/api/company/stack/all`);
            searchResults.value = response.data.data

        })

        const search = async () => {
            try {   
                if (searchTerm.value) {
                    console.log(searchTerm.value)
                    const response = await axios.get(`https://jovialcore.tech/wsc/api/company/stack/all?item=${searchTerm.value}`);
                    searchResults.value = response.data.data

                } else {
                    console.log('no search term')
                    const response = await axios.get(`https://jovialcore.tech/wsc/api/company/stack/all`);
                    searchResults.value = response.data.data
                }
            } catch (error) {
                searchResults.value = [];
                console.error(error);
            }
        };

  
        return {
            searchTerm,
            searchResults,
            search
        };
    }
};
</script>
  