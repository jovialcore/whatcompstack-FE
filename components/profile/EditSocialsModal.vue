<template>
  <button
    data-bs-toggle="modal"
    data-bs-target="#editSocialsModal"
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

  <!-- Modal -->
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
