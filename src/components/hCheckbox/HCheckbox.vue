<template>
  <label class="h-checkbox flex-row is-align-items-center">
    <span class="h-label">{{ label }}</span>
    <input type="checkbox" />
    <span class="h-checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "HCheckbox",
  props: {
    label: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hCheckbox/HCheckbox.scss";
</style>
