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
        class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3"
      >
        <p class="fw-bold text-dark mb-0 fs-5">Personal Information</p>
        <div>
          <button
            class="rounded-3 btn btn-outline-dark d-flex align-items-center gap-2"
          >
            <p class="mb-0">Edit</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
        </div>
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
        <div>
          <button
            class="rounded-3 btn btn-outline-dark d-flex align-items-center gap-2"
          >
            <p class="mb-0">Edit</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="d-flex flex-column gap-3">
        <div class="row g-3">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">Twitter</p>
            <p class="mb-0 text-dark text-truncate">{{ user.twitterUrl }}</p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">LinkedIn</p>
            <p class="mb-0 text-dark text-truncate">{{ user.linkedinUrl }}</p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">Github</p>
            <p class="mb-0 text-dark text-truncate">{{ user.githubUrl }}</p>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <p class="mb-0 text-secondary">Behance</p>
            <p class="mb-0 text-dark text-truncate">{{ user.behanceUrl }}</p>
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
  twitterUrl: "https://x.com/alexandraSeraph",
  githubUrl: "https://github.com/alexandraSeraph",
  linkedinUrl: "https://linkedin.com/in/alexandraSeraph",
  behanceUrl: "",
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
