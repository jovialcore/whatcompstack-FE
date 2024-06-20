<template>
    <div class="container-xxl flex-grow-1 container-p-y ">
        <div class="row align-items-center justify-content-center" style="vertical-align: middle;">

            <div class="col  col-md-6 col-xl-4">
                <!-- Register Card -->

                <div class="card">
                    <div class="card-body">
                        <h4 class="mb-2">Join a thriving commuinity of stackers 🚀</h4>
                        <p class="mb-4 mt-3">Become a member today ! </p>

                        <form id="formAuthentication" @submit.prevent="handleRegister" class="mb-3">

                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="name" class="form-control" id="username" name="name" required
                                    placeholder="Enter your fullname" autofocus="name" v-model="form.name" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>

                                <input type="email" class="form-control" id="email" name="email"
                                    placeholder="Enter your email" autocomplete="email" required v-model="form.email" />

                            </div>

                            <div class="mb-3">
                                <label for="Linkedin" class="form-label">Linkedin PROFILE URL </label>

                                <input type="url" class="form-control" name="linkedin_url"
                                    placeholder="Enter your linkedin url " autocomplete="linkedin_url" required
                                    v-model="form.linkedinUrl" />

                            </div>


                            <div class="mb-3 form-password-toggle">
                                <label class="form-label" for="password">Password</label>
                                <div class="input-group input-group-merge">
                                    <input type="password" class="form-control" name="password"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password" autocomplete="password" v-model="form.password" />
                                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>

                                </div>
                            </div>

                            <div class="mb-3 form-password-toggle">
                                <label class="form-label" for="password">Confirm Password</label>
                                <div class="input-group input-group-merge">
                                    <input type="password" class="form-control" name="password_confirmation"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password" autocomplete="password_confirmation"
                                        v-model="form.password_confirmation" />

                                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>

                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="terms-conditions" name="terms"
                                        required />
                                    <label class="form-check-label" for="terms-conditions">
                                        I agree to
                                        <NuxtLink to="/privacy"> privacy policy & terms</NuxtLink>
                                    </label>
                                </div>
                            </div>

                            <button class="btn btn-primary " :disabled="disableButton">

                                <span v-if="!disableButton">Sign up </span>
                                <span v-else> Signing you up .... </span>

                            </button>
                        </form>

                        <p class="text-center">
                            <span>Already have an account?</span>

                            <NuxtLink to="/community/login"> <span> Sign in instead </span></NuxtLink>

                        </p>
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
    name: 'chidiebere chukwudi',
    email: "jollydosky@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/chidieberechukwudi",
    password: "60Leaves60@",
    password_confirmation: "60Leaves60@"

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
