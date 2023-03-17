<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">UI Elements /</span> Cards Basic</h4>

        <!-- Examples -->
        <div class="row mb-5">
            <div class="col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                    <img class="card-img-top" src="../assets/img/elements/2.jpg" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="javascript:void(0)" class="btn btn-outline-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="javascript:void(0)" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import getCompany from '@/composables/getCompany'

export default {
    props: ['id'],
    name: 'DetailsComponent',

    setup(props) {
        const { company } = getCompany(props.id)

        return { company }
    }
}
</script>

<style>
.content {
    background: white;
    /* width: 40%; */
    margin: 0 auto;
    padding: 1.5em;
    border-radius: 5px;
    margin-bottom: 1.5em;
}

/* .detail-card {
    display: flex;
    flex-direction: column;
    align-items: start;
} */
.detail-card label {
    font-weight: bold;
    font-size: 1.2em;
    text-transform: uppercase;
    margin-bottom: .25em;
    color: #333;
}

.detail-card span {
    font-size: 1.1em;
    color: #666;
    border-bottom: 1px solid #ccc;
    padding-bottom: .5em;
    margin-bottom: 1em;
    width: 100%;
    text-align: left;
}

.badge {
    margin-right: 5px;
    margin-bottom: 0px;
    font-size: 12px;
}
</style>