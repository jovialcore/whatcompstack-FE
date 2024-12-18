<template>
  <ProfileEditModalToggler target="#editSocialsModal" />

  <div class="modal fade" tabindex="-1" id="editSocialsModal">
    <div class="modal-dialog">
      <div class="modal-content" style="border-radius: 14px">
        <div class="modal-header p-0">
          <div
            class="d-flex justify-content-between align-items-center w-100"
            style="padding: 8px 0px 8px 24px"
          >
            <h5 class="fw-bold mb-0" style="font-size: 1rem">Edit Socials</h5>
            <button
              type="button"
              class="btn text-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-square-fill m-0"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="modal-body py-2">
          <form action="" class="m-0">
            <div class="row mt-0">
              <div class="col-12 mb-3">
                <ProfileInputField
                  :id="'twitter'"
                  :label="'Twitter'"
                  :type="'text'"
                  :value="socialInfo.twitterUrl"
                />
              </div>
              <div class="col-12 mb-3">
                <ProfileInputField
                  :id="'linkedin'"
                  :label="'Linkedin'"
                  :type="'text'"
                  :value="socialInfo.linkedinUrl"
                />
              </div>

              <div class="col-12 mb-3">
                <ProfileInputField
                  :id="'github'"
                  :label="'Github'"
                  :type="'text'"
                  :value="socialInfo.githubUrl"
                />
              </div>
              <div class="col-12 mb-3">
                <ProfileInputField
                  :id="'behance'"
                  :label="'Behance'"
                  :type="'text'"
                  :value="socialInfo.behanceUrl"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" @click="handleSubmit">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: Object,
});
const socialInfo = ref(props.user.socials);

const handleSubmit = () => {
  console.log({ socialInfo });
};
</script>
