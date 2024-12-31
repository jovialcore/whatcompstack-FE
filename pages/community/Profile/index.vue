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

    <ProfileSingleInfoSection
      v-if="user"
      :sectionTitle="'Personal Information'"
      :editSectionModalComponent="EditPersonalInformationModal"
      :editSectionModalProps="{
        user,
      }"
      :data="[
        {
          label: 'First Name',
          value: user.firstName,
        },
        {
          label: 'Last Name',
          value: user.lastName,
        },
        {
          label: 'Email',
          value: user.email,
        },
        {
          label: 'Phone Number',
          value: user.phone,
        },
        {
          label: 'User Role',
          value: user.role,
        },
      ]"
    />
    <ProfileSingleInfoSection
      v-if="user"
      :sectionTitle="'Socials'"
      :editSectionModalComponent="EditSocialsModal"
      :editSectionModalProps="{
        user,
      }"
      :data="[
        {
          label: 'Twitter',
          value: user.socials.twitterUrl,
        },
        {
          label: 'LinkedIn',
          value: user.socials.linkedinUrl,
        },
        {
          label: 'Github',
          value: user.socials.githubUrl,
        },
        {
          label: 'Behance',
          value: user.socials.behanceUrl,
        },
      ]"
    />
  </div>
</template>

<script setup>
import avatar from "../../../assets/img/avatars/6.png";
import EditPersonalInformationModal from "~/components/profile/EditPersonalInformationModal.vue";
import EditSocialsModal from "~/components/profile/EditSocialsModal.vue";
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
