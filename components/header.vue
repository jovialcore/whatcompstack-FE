<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-3">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">

        <!-- desktop logo -->
        <img class="desktop-logo"
          src="https://res.cloudinary.com/chidiebere/image/upload/c_thumb,w_200,g_face/v1703702996/WCS_4.png"
          style="width: 10em;">

        <!-- mobile logo -->
        <img class="mobile-logo"
          src="https://res.cloudinary.com/chidiebere/image/upload/c_thumb,w_200,g_face/v1703703886/WCS_555555555555.png"
          style="width: 1.6em; vertical-align: top;">

      </router-link>

      <div class="justify-content-end" id="navbarTogglerDemo02">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li v-if="auth.isLoggedIn" class="nav-item">


            <button @click="handleLogOut" class="btn btn-outline-grey mt-3">
              Log out
            </button>

          </li>

          <li v-else class="nav-item">

            <NuxtLink to="/community/login" class="btn btn-outline-secondary mt-3 me-2">
              Login
            </NuxtLink>

            <NuxtLink to="/community/auth/register" class="btn btn-outline-secondary outline-none mt-3">
              Register
            </NuxtLink>

          </li>

          <li class="nav-item">
            <a href="https://github.com/jovialcore/whatcompstack-BE?tab=readme-ov-file#-what-company-stack"
              target="_blank" class="nav-link">🌟 us
              on Github </a>

          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 767px) {
  .desktop-logo {
    display: none;
  }

  .mobile-logo {
    display: block;
  }
}

@media (min-width: 768px) {
  .desktop-logo {
    display: block;
  }

  .mobile-logo {
    display: none;
  }
}
</style>



<script setup>


import { useAuthStore } from '~/store/useAuthStore';

const auth = useAuthStore();

function handleLogOut() {

  auth.logout()
}


</script>