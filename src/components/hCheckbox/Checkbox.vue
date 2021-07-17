<template>
  <label class="h-checkbox flex-row is-align-items-center">
    <span class="h-label">{{ label }}</span>
    <input type="checkbox" :name="name" />
    <span class="h-checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    /**
     * Label của checkbox
     * @author CreatedBy: dbhuan (17/07/2021)
     */
    label: {
      type: String,
    },

    /**
     * Tên của checkbox
     * @author CreatedBy: dbhuan (17/07/2021)
     */
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/hCheckbox/HCheckbox.scss";
</style>
