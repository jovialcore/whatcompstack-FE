<template>
    <div class="container-xxl flex-grow-1 container-p-y ">
        <div class="row align-items-center justify-content-center">

            <div class="col  col-md-6 col-xl-4">
                <!-- Register Card -->
                <div class="card">
                    <div class="card-body">
                        <h4 class="mb-2">Join a thriving commuinity of stackers 🚀</h4>
                        <p class="mb-4 mt-3">Become a member today ! </p>

                        <form id="formAuthentication" class="mb-3">

                            <div class="mb-3">
                                <label for="name" class="form-label">Username</label>
                                <input type="name" class="form-control" id="username" name="name" value="" required
                                    placeholder="Enter your username" autofocus="name" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>

                                <input type="email" class="form-control" id="email" name="email"
                                    placeholder="Enter your email" autocomplete="email" />

                            </div>
                            <div class="mb-3 form-password-toggle">
                                <label class="form-label" for="password">Password</label>
                                <div class="input-group input-group-merge">
                                    <input type="password" id="password" class="form-control" name="password"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password" autocomplete="new-password" />
                                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>

                                </div>
                            </div>

                            <div class="mb-3 form-password-toggle">
                                <label class="form-label" for="password">Confirm Password</label>
                                <div class="input-group input-group-merge">
                                    <input type="password" id="password" class="form-control"
                                        name="password_confirmation"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password" autocomplete="new-password" />

                                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>

                                </div>
                            </div>

                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="terms-conditions"
                                        name="terms" />
                                    <label class="form-check-label" for="terms-conditions">
                                        I agree to
                                        <NuxtLink to="/privacy"> privacy policy & terms</NuxtLink>
                                    </label>
                                </div>
                            </div>

                            <button class="btn btn-primary  text-dark ">Sign up</button>
                        </form>

                        <p class="text-center">
                            <span>Already have an account?</span>
                            <a href="">
                                <span>Sign in instead</span>
                            </a>
                        </p>
                    </div>
                </div>
                <!-- Register Card -->
            </div>
        </div>
    </div>

</template>


<script setup>


</script>

<style scoped>
/* we should consider making the css reflects wiht that css --- */
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open>.dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #233446;
    border-color: #285e8e;
    /*set the color you want here*/
}

.btn-primary:hover {
    color: white !important;
}
</style>
