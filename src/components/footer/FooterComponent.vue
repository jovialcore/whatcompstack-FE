<template>
  <footer>
    <hr />
    <span>
      &#169; {{ currentYear }} WhatCompanyStack
    </span>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
