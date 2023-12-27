<template>
  <nav class="navbar navbar-expand-lg bg-dark mb-3">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">  <img src="https://res.cloudinary.com/chidiebere/image/upload/c_thumb,w_200,g_face/v1703702996/WCS_4.png" style="width: 10em;"> </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="https://github.com/jovialcore/whatcompstack-BE" target="_blank" class="nav-link">Please star (🌟) us on Github </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>