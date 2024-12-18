<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="d-flex justify-content-between align-items-center gap-2 mb-3">
      <p class="fw-bold mb-0">My Profile</p>
      <div
        class="flex-grow-1"
        style="height: 1px; background-color: #ced4da75"
      ></div>
    </div>
    <div
      class="d-flex gap-3 bg-white py-3 py-sm-4 px-3 px-sm-5 align-items-center mb-3 rounded-3"
    >
      <div
        class="rounded-circle bg-secondary d-flex justify-content-center align-items-center overflow-hidden user-avatar"
      >
        <img :src="user.avatar" alt="" class="h-100 object-cover" />
      </div>
      <div class="d-flex flex-column gap-sm-1">
        <p class="fw-bold text-dark mb-0">
          {{ user.firstName }} {{ user.lastName }}
        </p>
        <p class="mb-0">{{ user.role }}</p>
        <p class="mb-0">{{ user.location }}</p>
      </div>
    </div>

    <div class="bg-white py-4 px-5 rounded-3 mb-3">
      <div
        class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3 w-100"
      >
        <p class="fw-bold text-dark mb-0 fs-5">Personal Information</p>

        <ProfileEditPersonalInformationModal v-if="user" :user="user" />
      </div>

      <div class="d-flex flex-column gap-3">
        <div class="row g-3">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">First Name</p>
            <p class="mb-0 text-dark">{{ user.firstName }}</p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">Last Name</p>
            <p class="mb-0 text-dark">{{ user.lastName }}</p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">Email</p>
            <p class="mb-0 text-dark">{{ user.email }}</p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">Phone Number</p>
            <p class="mb-0 text-dark">{{ user.phone }}</p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">User Role</p>
            <p class="mb-0 text-dark">{{ user.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-4 px-5 rounded-3 mb-3">
      <div
        class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3"
      >
        <p class="fw-bold text-dark mb-0 fs-5">Socials</p>
        <ProfileEditSocialsModal v-if="user" :user="user" />
      </div>

      <div class="d-flex flex-column gap-3">
        <div class="row g-3">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">Twitter</p>
            <p class="mb-0 text-dark text-truncate">
              {{ user.socials.twitterUrl }}
            </p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">LinkedIn</p>
            <p class="mb-0 text-dark text-truncate">
              {{ user.socials.linkedinUrl }}
            </p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">Github</p>
            <p class="mb-0 text-dark text-truncate">
              {{ user.socials.githubUrl }}
            </p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">Behance</p>
            <p class="mb-0 text-dark text-truncate">
              {{ user.socials.behanceUrl }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import avatar from "../../../assets/img/avatars/6.png";
const user = {
  firstName: "Alexandra",
  lastName: "Seraphinius",
  email: "alexandra.seraph@email.com",
  phone: "(+234) 8123456789",
  role: "Admin",
  id: 1,
  location: "Lagos, Nigeria",
  avatar,
  socials: {
    twitterUrl: "https://x.com/alexandraSeraph",
    githubUrl: "https://github.com/alexandraSeraph",
    linkedinUrl: "https://linkedin.com/in/alexandraSeraph",
    behanceUrl: "",
  },
};
</script>

<style scoped>
.user-avatar {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
}

@media screen and (max-width: 568px) {
  .user-avatar {
    height: 64px;
    width: 64px;
  }
}
</style>
