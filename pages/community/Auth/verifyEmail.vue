<template>
    <div class="container-xxl flex-grow-1 container-p-y  ">
        <div class="row align-items-center justify-content-center" style="vertical-align: middle;">

            <div class="col  col-md-6 col-xl-4">
                <!-- Register Card -->

                <div class="card">
                    <div class="card-body">
                        <h4 class="mb-2">Please verify your email address 🚀</h4>
                        <p class="mb-4 mt-3">Check your email inbox for a verification link that was sent to you
                            <b>or:</b> </p>

                        <form id="formAuthentication" class="mb-3">

                            <button class="btn btn-primary " :disabled="disableButton" @click="handleRegister">

                                <span v-if="!disableButton">Resend email Link</span>
                                <span v-else> Sending .... </span>

                            </button>
                        </form>
                    </div>
                </div>
                <!-- Register Card -->
            </div>
        </div>
    </div>

</template>


<script setup>
import { useAuthStore } from '~/store/useAuthStore';

const { $toast } = useNuxtApp();

let disableButton = ref(false)

const form = ref({
    name: null,
    email: null,
    linkedinUrl: null,
    password: null,
    password_confirmation: null

})

const handleRegister = async () => {

    disableButton.value = true
    const { data, error } = await useAuthStore().register(form.value)

    if (data.value.response == false) {
        disableButton.value = false
        $toast.error(data.value.message)
    } else {
        $toast.success(data.value.message)
        navigateTo('/community/Auth/verifyEmail')
    }
}



</script>

<style scoped>
.btn-primary {
    background-color: #233446;
    border: #233446;
}
</style>
