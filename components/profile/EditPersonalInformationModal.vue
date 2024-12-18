<template>
  <ProfileEditModalToggler target="#editPersonalInformationModal" />

  <div class="modal fade" tabindex="-1" id="editPersonalInformationModal">
    <div class="modal-dialog">
      <div class="modal-content" style="border-radius: 14px">
        <div class="modal-header p-0">
          <div
            class="d-flex justify-content-between align-items-center w-100"
            style="padding: 8px 0px 8px 24px"
          >
            <h5 class="fw-bold mb-0" style="font-size: 1rem">
              Edit Personal Information
            </h5>
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
              <div class="col-12 col-md-6 mb-3">
                <ProfileInputField
                  :id="'firstName'"
                  :label="'First Name'"
                  :type="'text'"
                  :value="userInfo.firstName"
                />
              </div>
              <div class="col-12 col-md-6 mb-3">
                <ProfileInputField
                  :id="'lastName'"
                  :label="'Last Name'"
                  :type="'text'"
                  style="border-radius: 10px; font-size: 0.8rem"
                  id="lastName"
                  :value="userInfo.lastName"
                />
              </div>

              <div class="col-12 mb-3">
                <ProfileInputField
                  :id="'email'"
                  :label="'Email'"
                  :type="'email'"
                  :value="userInfo.email"
                />
              </div>

              <div class="col-12 mb-3">
                <ProfileInputField
                  :id="'phone'"
                  :label="'Phone'"
                  :type="'text'"
                  :value="userInfo.phone"
                />
              </div>

              <div class="col-12 mb-3">
                <label
                  class="form-label fw-normal text-secondary text-capitalize mb-1"
                  for="role"
                  >User Role</label
                >
                <select
                  class="form-select py-2"
                  style="border-radius: 10px; font-size: 0.8rem"
                  id="role"
                  :value="userInfo.role"
                  disabled
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: Object,
});
const userInfo = ref(props.user);
</script>
