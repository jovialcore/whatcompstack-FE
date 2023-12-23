<template>
    <div class="col">
        <div class="card-body py-4">
            <h5 class="card-title fst-normal">{{ title }} </h5>
            <div class="card-text "> {{ body }}</div>
            <div> 
                <a :href="link" target="_blank">
                    <span class="badge bg-info">Contact</span> 
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'body', 'link' ],
    name: "HumanInfoCard"
}
</script>